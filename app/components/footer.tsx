export default function Footer() {
  return (
    <footer className="text-center w-full pb-8">
      <p className="text-slate-950 dark:invert">
        {`© ${new Date().getFullYear()} | NaP 💤 Developers 💻`}
      </p>
    </footer>
  );
}
