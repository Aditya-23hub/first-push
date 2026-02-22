
// import {useState } from "react";
// import CommentForm from "./CommentForm";
// export default function Comment(){
//     let[comments,setComments]=useState([{ username:" aditya raj ",
//         remarks:" how r youy  ",
//         rating:5}])
// let addNewComment=(comment)=>{
//     // setComments(currComments)=>[...currComments,comment])
//     setComments((currComments) => [...currComments, comment]);

//     console.log("added new coooment ");
// }
//         return(<>
//             <div><h3>All Comment</h3>
//             {comments.map((comment,idx)=>(
// <div  className="comments" >
//                 &nbsp;
//                 <span>{comments.rating}</span>
//                    &nbsp;   &nbsp;
//                  <span>{comments.username}</span> 
//                     &nbsp;
//                  <span>{comments.remarks}</span></div>
//             ))}
//             </div>
//                  <CommentForm addNewComment={addNewComment}/>
// </>
//         )
// }
import { useState } from "react";
import {useFormik} from 'formik';
import CommentForm from "./CommentForm";

export default function Comment() {

    const [comments, setComments] = useState([
        {
            username: "aditya raj",
            remarks: "how are you?",
            rating: 5
        }
    ]);

    const addNewComment = (newComment) => {
        setComments((currComments) => [
            ...currComments,
            newComment
        ]);
    };

    return (
        <div>
            <h3>All Comments</h3>

            {comments.map((comment, index) => (
                <div key={index} className="comment-box">
                    <p><b>User:</b> {comment.username}</p>
                    <p><b>Remark:</b> {comment.remarks}</p>
                    <p><b>Rating:</b> {comment.rating}</p>
                    <hr />
                </div>
            ))}

            <CommentForm addNewComment={addNewComment} />
        </div>
    );
}
