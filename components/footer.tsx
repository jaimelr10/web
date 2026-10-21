export default function Footer() {
  return (
    <footer className="mt-8 border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Jaime León</p>
      </div>
    </footer>
  )
}
