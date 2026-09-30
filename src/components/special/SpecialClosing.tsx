export default function SpecialClosing({ message }: { message?: string }) {
  return <footer className="vitela-closing"><span className="vitela-closing-mark" aria-hidden="true" />{message && <p>{message}</p>}</footer>;
}
