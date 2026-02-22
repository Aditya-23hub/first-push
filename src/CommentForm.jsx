``
import { useState } from "react";
export default function CommentForm({addNewComment}){
    let[formData,setFormData]=useState({
        username:"",
        remarks:" ",
        rating:5
    });
let handleInputChange=(event)=>{
    setFormData((currData)=>{
        return{...currData,[event.target.name]:event.target.value};
    })
}
let handelSubmit=(event)=>{
    console.log(formData);
    addNewComment(formData);
    event.preventDefault();
    setFormData({
        username:" ",
        remarks:" ",
        rating:5
    })
}
    return(
        <div>
            <h4>Give a Comment </h4>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username"type="text"value={formData.username} onChange={handleInputChange} name="username"/>
                <br>
                </br>
                <br>
                </br>
                <label htmlFor="remarks">Remarks</label>
                <textarea value={formData.remarks} placeholder="add a remarks "  onChange={handleInputChange} name="remarks">Remarks</textarea>
                 <br></br>
                 <br>
                </br>
                <br>
                </br>
                <label htmlFor="  rating">Rating </label>
                <input placeholder="rating"type="number"min={1}max={5} value={formData.rating}  onChange={handleInputChange} name="rating"/> <br>
                </br>
                <br>
                </br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}
//  import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// export default function CommentForm({ addNewComment }) {

//     // ✅ Validation Schema
//     const validationSchema = Yup.object({
//         username: Yup.string()
//             .min(2, "Username too short")
//             .required("Username is required"),

//         remarks: Yup.string()
//             .min(5, "Remarks too short")
//             .required("Remarks are required"),

//         rating: Yup.number()
//             .min(1, "Minimum rating is 1")
//             .max(5, "Maximum rating is 5")
//             .required("Rating is required")
//     });

//     return (
//         <div>
//             <h4>Give a Comment</h4>

//             <Formik
//                 initialValues={{
//                     username: "",
//                     remarks: "",
//                     rating: 5
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, { resetForm }) => {
//                     addNewComment(values);
//                     resetForm();
//                 }}
//             >
//                 {() => (
//                     <Form>

//                         <label>Username</label>
//                         <Field
//                             type="text"
//                             name="username"
//                             placeholder="username"
//                         />
//                         <ErrorMessage name="username" component="div" style={{ color: "red" }} />

//                         <br /><br />

//                         <label>Remarks</label>
//                         <Field
//                             as="textarea"
//                             name="remarks"
//                             placeholder="add a remark"
//                         />
//                         <ErrorMessage name="remarks" component="div" style={{ color: "red" }} />

//                         <br /><br />

//                         <label>Rating</label>
//                         <Field
//                             type="number"
//                             name="rating"
//                             min="1"
//                             max="5"
//                         />
//                         <ErrorMessage name="rating" component="div" style={{ color: "red" }} />

//                         <br /><br />

//                         <button type="submit">Add Comment</button>

//                     </Form>
//                 )}
//             </Formik>

//         </div>
//     );
// }
