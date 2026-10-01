import { useCallback, useEffect, useRef, useState } from "react";
import type { EventData, SpecialCelebrationData } from "../types/event";
import Reveal from "../components/Reveal";
import SpecialSealedScrollIntro from "../components/special/SealedScrollIntro";
import SpecialVellumSheet from "../components/special/VellumSheet";
import SpecialWaterLightDecor from "../components/special/WaterLightDecor";
import SpecialHero from "../components/special/SpecialHero";
import SpecialVerseBlock from "../components/special/VerseBlock";
import SpecialPeopleGroups from "../components/special/PeopleGroups";
import SpecialCountdown from "../components/special/SpecialCountdown";
import SpecialVenueActions from "../components/special/VenueActions";
import SpecialCalendarButton from "../components/special/SpecialCalendarButton";
import SpecialClosing from "../components/special/SpecialClosing";
import SpecialAdditionalEvent from "../components/special/SpecialAdditionalEvent";

export default function SpecialVitelaTemplate({ event, data }: { event: EventData; data: SpecialCelebrationData }) {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const complete = useCallback(() => setOpened(true), []);
  const reveal = useCallback(() => setRevealed(true), []);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${data.heading} · ${event.title}`;
    return () => { document.title = previousTitle; };
  }, [data.heading, event.title]);
  useEffect(() => {
    if (opened) { window.scrollTo({ top: 0, behavior: "instant" }); heading.current?.focus({ preventScroll: true }); }
  }, [opened]);
  return (
    <div className="vitela-page">
      <SpecialWaterLightDecor />
      {!opened && <SpecialSealedScrollIntro onReveal={reveal} onComplete={complete} />}
      {revealed && <div inert={!opened}><SpecialVellumSheet>
        <SpecialHero data={data} headingRef={heading} active={opened} />
        {data.quote && <Reveal><SpecialVerseBlock quote={data.quote} /></Reveal>}
        {data.people?.length ? <Reveal><SpecialPeopleGroups groups={data.people} /></Reveal> : null}
        <Reveal><SpecialCountdown targetDate={data.dateTimeIso} dateLabel={data.dateLabel} timeLabel={data.timeLabel} /></Reveal>
        <Reveal><SpecialVenueActions venue={data.venue} timeLabel={data.timeLabel ?? `${data.dateTimeIso.slice(11, 16)} hrs`} /></Reveal>
        <Reveal><SpecialCalendarButton title={data.calendar?.title ?? `${data.heading} · ${data.honoreeName}`} description={data.calendar?.description} startIso={data.dateTimeIso} location={[data.venue.name, data.venue.city].filter(Boolean).join(", ")} /></Reveal>
        {data.additionalEvents?.map((additionalEvent, index) => <Reveal key={`${additionalEvent.dateLabel}-${index}`}><SpecialAdditionalEvent event={additionalEvent} /></Reveal>)}
        <Reveal><SpecialClosing message={data.closingMessage} /></Reveal>
      </SpecialVellumSheet></div>}
    </div>
  );
}
