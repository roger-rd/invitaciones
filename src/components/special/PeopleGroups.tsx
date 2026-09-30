import type { SpecialCelebrationData } from "../../types/event";

export default function SpecialPeopleGroups({ groups }: { groups: NonNullable<SpecialCelebrationData["people"]> }) {
  return <div className="vitela-people">{groups.map((group, index) => <section key={`${group.title}-${index}`} className="vitela-people-group"><h2 className="vitela-label">{group.title}</h2>{group.names.map((name, i) => <p key={`${name}-${i}`}>{name}</p>)}</section>)}</div>;
}
