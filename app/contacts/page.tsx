export const dynamic = "force-static"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-ti-fg">Контакти</h1>
          <ul className="space-y-6 text-lg text-ti-fg">
            <li>
              Пошта:{" "}
              <a
                href="mailto:support@ua-fediland.de"
                className="text-ti-accent hover:text-ti-accent/80 transition-colors underline"
              >
                support@ua-fediland.de
              </a>
            </li>
            <li>
              Fediverse:{" "}
              <a
                href="https://soc.ua-fediland.de/@Shizanit"
                className="text-ti-accent hover:text-ti-accent/80 transition-colors underline"
              >
                @Shizanit@soc.ua-fediland.de
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
