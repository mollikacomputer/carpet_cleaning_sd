
import { commentsData } from "@/data/commentsData";
import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <section>
      <h2 className="text-3xl text-center font-bold my-16">
        Customer Reaction
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 px-10">
        {
         commentsData.map((commentData)=> <SingleComment key={commentData.id} commentData={commentData} /> )
        }
      </div>
    </section>
  );
};

export default Comments;