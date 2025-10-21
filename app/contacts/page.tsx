import { Mail, AtSign } from "lucide-react"

export const dynamic = "force-static"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-ti-fg">Контакти</h1>
          <br />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="contact-card group">
              <div className="contact-icon-wrapper">
                <Mail className="w-8 h-8 text-ti-fg" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-ti-fg">Пошта</h2>

              <a href="mailto:support@ua-fediland.de" className="contact-link">
                support@ua-fediland.de
              </a>
            </div>

            {/* Fediverse Card */}
            <div className="contact-card group">
              <div className="contact-icon-wrapper">
                <AtSign className="w-8 h-8 text-ti-fg" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-ti-fg">Fediverse</h2>

              <a
                href="https://soc.ua-fediland.de/@Shizanit"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Shizanit@soc.ua-fediland.de
              </a>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 text-center"></div>
        </div>
      </main>
    </div>
  )
}
