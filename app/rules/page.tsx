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
          <h1 className="text-4xl font-bold text-center mb-12 text-ti-fg">Правила</h1>
          <div className="bg-ti-bg-alt/40 backdrop-blur-sm border border-ti-fg/10 rounded-lg p-8">
            <ol className="space-y-6">
              {rules.map((rule, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-ti-accent font-bold text-lg flex-shrink-0">{index + 1}.</span>
                  <p className="text-ti-fg/90 text-lg leading-relaxed">{rule}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  )
}
