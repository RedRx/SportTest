import Content from "@c/contents/Content";
import "animate.css";
import { content_americanFootball } from "@/contents/americanFootball";
import { content_basketball } from "@/contents/basketBall";

export default function Home() {
  return (
    <div>
      <Content {...content_americanFootball} />
      <Content {...content_basketball} />
    </div>
  );
}
