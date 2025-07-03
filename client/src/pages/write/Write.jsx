import { useContext, useState } from "react";
import "./write.css";
import API from "../../api/config";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Validate inputs
    if (!title.trim()) {
      setError("Please enter a title for your post.");
      setLoading(false);
      return;
    }
    
    if (!desc.trim()) {
      setError("Please enter some content for your post.");
      setLoading(false);
      return;
    }
    
    const newPost = {
      username: user.username,
      title: title.trim(),
      desc: desc.trim(),
    };
    
    try {
      // Handle file upload first if there's a file
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;
        
        try {
          console.log("Uploading file to:", API.defaults.baseURL + "/upload");
          await API.post("/upload", data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log("File uploaded successfully");
        } catch (uploadErr) {
          console.error("File upload error:", uploadErr);
          const errorMsg = uploadErr.response?.data?.message || uploadErr.message || "Unknown upload error";
          setError(`Failed to upload image: ${errorMsg}`);
          setLoading(false);
          return;
        }
      }
      
      // Create the post
      console.log("Creating post at:", API.defaults.baseURL + "/posts");
      console.log("Post data:", newPost);
      const res = await API.post("/posts", newPost);
      console.log("Post created successfully:", res.data);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.error("Error creating post:", err);
      let errorMsg = "Failed to create post. Please try again.";
      
      if (err.response) {
        // Server responded with error status
        errorMsg = err.response.data?.message || `Server error: ${err.response.status}`;
      } else if (err.request) {
        // Request was made but no response received
        errorMsg = "Network error: Could not connect to server. Please check your internet connection.";
      } else {
        // Something else happened
        errorMsg = err.message || "An unexpected error occurred.";
      }
      
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '10px', 
            padding: '10px', 
            border: '1px solid red', 
            borderRadius: '4px',
            backgroundColor: '#ffebee'
          }}>
            {error}
          </div>
        )}
        
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={e=>setTitle(e.target.value)}
            required
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            value={desc}
            onChange={e=>setDesc(e.target.value)}
            required
          ></textarea>
        </div>
        <button 
          className="writeSubmit" 
          type="submit"
          disabled={loading || !title.trim() || !desc.trim()}
          style={{
            opacity: loading || !title.trim() || !desc.trim() ? 0.6 : 1,
            cursor: loading || !title.trim() || !desc.trim() ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </form>
    </div>
  );
}
