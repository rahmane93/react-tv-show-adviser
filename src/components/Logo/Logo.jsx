import s from "./style.module.css";
export function Logo({ title, subtitle, image }) {
  return (
    <>
      <div className={s.container}>
        <img src={image} className="img" alt="" />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </>
  );
}
