import HeaderNav from "@/components/header/components/HeaderNav/HeaderNav";

export default function BurgerMenu({ isShowed, activeNavIndex }) {
  return <>{isShowed ? <HeaderNav activeNavIndex={activeNavIndex} /> : null}</>;
}
