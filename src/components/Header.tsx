import Counter from "./Counter"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#ece0d1] border-b border-[#38220f]/[0.08]">
        <Logo />
        <Counter />
    </header>
  )
}
