import Skeleton from "react-loading-skeleton";
import s from "./SkeletonSlide.module.scss";

const SkeletonCard = ({ slideSkeleton }) => {
  return Array(slideSkeleton)
    .fill(0)
    .map((item, i) => (
      <div className={s.card} key={i}>
        <div className="img-skeleton">
          <Skeleton className={s.img} />
        </div>
        <div className="text-skeleton">
          <Skeleton count={4} style={{ marginTop: "20px" }} />
        </div>
      </div>
    ));
};

export default SkeletonCard;
