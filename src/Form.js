import React from "react";

const Form = ({ search, setSearch,handleSubmit }) => {
  return (
    <form className=" container d-flex justify-content-center text-center mt-3" onSubmit={handleSubmit}>
      <div className="form-group" style={{ position: "relative" }}>
        <label
          htmlFor="location"
          style={{ position: "absolute", left: "-9999999px" }}
        >
          Location
        </label>

        <input
          type="text"
          className="form-control "
          id="location"
          aria-label="location"
          placeholder="Enter The Location"
          required
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mt-2 " >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
