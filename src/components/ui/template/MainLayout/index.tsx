import MainItems from "@/components/ui/organism/MainItems";
import $ from "./mainLayout.module.scss";

export default function MainLayout() {
  return (
    <div className={$.mainLayout}>
      <MainItems />
    </div>
  );
}
