import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";
export function TVShowList({ tvShowList, onclick }) {
  return (
    <>
      <div className={s.title}>Vous pourriez egalement aimer : </div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_list_item}>
              <TVShowListItem
                key={tvShow.id}
                tvShow={tvShow}
                onclick={onclick}
              />
            </span>
          );
        })}
      </div>
    </>
  );
}
