import aboutstyles from './styles.module.css'

export default function AboutLayput({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={aboutstyles.main}>
        {children}
      </main>
    </>
  )
}