import { Shield } from "lucide-react"

export const dynamic = "force-static"

export default function RulesPage() {
  const rules = [
    "Основна мова українська, але допускаються всі.",
    "Обмеження на тематику відсутнє, кожен може знайти своє місце і покликати друзів.",
    "Заборонено публікацію особистої інформації інших користувачів (якщо це сталося згадайте адміністратора або напишіть на пошту support@ua-fediland.de).",
    "Юзер має право повністю видалити свої дані.",
    "Модерація інстансу вирішує всі питання в індивідуальному порядку.",
    "При здійсненні модерації адміністрація може брати до уваги активність і поведінку користувача за межами цього сервера.",
    "При порушенні базового мережевого етикету, модерація має право вжити заходи на свій розсуд, в залежності від ситуації.",
    "Користувачу категорично заборонена публікація фото/відео/тексту та іншої інформації про розміщення українських бійців.",
    'Заборонено публікувати фото/відео/аудіо/текст та інших видів інформації на підтримку війни та так званої "спеціальну військову операцію".',
    "Публікація виключно згенерованого контенту (AI) розглядається індивідуально, контент рівня AI slop заборонений.",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-16">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-ti-accent rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-ti-fg" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ti-fg">Правила</h1>
            <p className="text-ti-fg/70 text-lg max-w-2xl mx-auto">
              Наші правила створені для того, щоб кожен почувався комфортно та безпечно в нашій спільноті
            </p>
          </div>

          {/* Rules List */}
          <div className="rules-card">
            <ol className="space-y-6">
              {rules.map((rule, index) => (
                <li key={index} className="rule-item">
                  <div className="flex gap-4">
                    <div className="rule-number">
                      <span className="rule-number-text">{index + 1}</span>
                    </div>
                    <p className="text-ti-fg/90 text-lg leading-relaxed flex-1">{rule}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  )
}
