import React from "react";

function Skill() {
  const technicalSkills = [
    { icon: "fab fa-html5 text-danger", name: "HTML" },
    { icon: "fab fa-css3-alt text-primary", name: "CSS" },
    { icon: "fab fa-js text-warning", name: "JavaScript" },
    { icon: "fab fa-python text-info", name: "Python" },
    { icon: "fab fa-cuttlefish text-primary", name: "C++" },
    { icon: "fas fa-database text-success", name: "MySQL" },
    { icon: "fas fa-brain text-warning", name: "Machine Learning" },
    { icon: "fas fa-cloud text-light", name: "Cloud Computing" },
    { icon: "fas fa-database text-warning", name: "Data Science" },
    { icon: "fas fa-desktop text-info", name: "Operating System" },
    { icon: "fas fa-code-branch text-danger", name: "Data Structures & Algorithms" },
    { icon: "fas fa-server text-success", name: "DBMS" },
    { icon: "fas fa-robot text-warning", name: "Scikit-learn" },
    { icon: "fas fa-brain text-primary", name: "TensorFlow" },
    { icon: "fas fa-table text-success", name: "Pandas" },
    { icon: "fas fa-superscript text-info", name: "NumPy" },
    { icon: "fas fa-chart-line text-danger", name: "Matplotlib" },
  ];

  const professionalSkills = [
    { label: "Creativity", percent: 90, offset: 28 },
    { label: "Communication", percent: 65, offset: 98 },
    { label: "Problem Solving", percent: 75, offset: 70 },
    { label: "Teamwork", percent: 85, offset: 42 },
  ];

  return (
    <div className="w-100 min-vh-100 bg-dark text-white py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-1">
          My <span style={{ color: "#00a6ff" }}>Skills</span>
        </h2>
      </div>

      <div className="container-fluid px-4">
        <div className="row">
          {/* Technical Skills */}
          <div className="col-lg-6 mb-5">
            <h4 className="text-center border-bottom pb-2 mb-4">
              Technical Skills
            </h4>
            <div className="row justify-content-center g-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3 text-center">
                  <div
                    className="p-3 rounded-3 bg-secondary bg-opacity-25 border border-info h-100 d-flex flex-column align-items-center justify-content-center shadow-sm hover-scale"
                    style={{
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <i
                      className={`${skill.icon} fs-2 mb-2`}
                      style={{ color: "#00a6ff" }}
                    ></i>
                    <p className="fw-semibold">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="col-lg-6 text-center">
            <h4 className="border-bottom pb-2 mb-4">Professional Skills</h4>
            <div className="row justify-content-center">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="col-6 col-md-4 mb-4">
                  <div
                    className="position-relative d-inline-block"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <svg
                      className="position-absolute top-0 start-0"
                      width="120"
                      height="120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#333"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#00a6ff"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="314"
                        strokeDashoffset={skill.offset}
                      />
                    </svg>
                    <div className="position-absolute top-50 start-50 translate-middle fw-bold fs-5">
                      {skill.percent}%
                    </div>
                  </div>
                  <p className="mt-2">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
