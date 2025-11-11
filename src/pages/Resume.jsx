import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 RAVI SHYAM SINGH
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              B.Tech in Computer Science & Engineering (2026)
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Madhubani, Bihar, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ rshyamsingh106@gmail.com | 📞 +91 8102001624
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
              <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Full stack developer experienced in architecting secure, realtime, and data-driven platforms. Proven track record delivering collaboration hubs, learning systems, and analytics dashboards with Java, Python, React, Django, and modern DevOps tooling. Adept at leading end-to-end development cycles and driving measurable operational gains.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Computer Science & Engineering</strong> — Kalasalingam Academy of Research and Education, Srivilliputhur <br />
              <span style={{ color: "#aaa" }}>Expected May 2026 | CGPA: 7.33 / 10.0</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>Senior Secondary (Class XII)</strong> — K.Y.V.K Janta College, Bihar School Examination Board <br />
              <span style={{ color: "#aaa" }}>Physics, Chemistry, Mathematics | Feb 2017 – Feb 2019</span>
            </li>
            
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              1️⃣ <strong>Blood Bank Management System</strong>
            </li>
            <li>
              2️⃣ <strong>Syncspace Collaborative Platform</strong>
            </li>
            <li>
              3️⃣ <strong>Virtual Lab – Cryptography</strong> 
            </li>
            <li>
              4️⃣ <strong>Interactive Java Learning Platform</strong> 
            </li>
            <li>
              5️⃣ <strong>Student Dropout Prediction & Analysis</strong> 
            </li>
            <li>
              6️⃣ <strong>SkyServe Drone Services</strong> 
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Java",
              "TypeScript",
              "Python",
              "SQL",
              "C++",
              "React",
              "Flask",
              "Vite",
              "Tailwind CSS",
              "Docker",
              "CI/CD",
              "Git & GitHub",
              "React Router",
              "Zustand / Redux",
              "Axios",
              "Flask-JWT-Extended",
              "Flask-SocketIO",
              "Problem Solving",
              "Team Collaboration",
              "Agile Delivery",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🗣 Languages</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, color: "#ccc" }}>
            <li>• Hindi (Native)</li>
            <li>• English (Fluent)</li>
            <li>• Tamil (Basic Proficiency)</li>
            <li>• Bengali (Basic Proficiency)</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/Ravishyamsingh" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/ravi-shyam-singh-790273367/" },
            { name: "📸 Instagram", link: "https://www.instagram.com/ravishyam_singh/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/my_resume.pdf"
            title="Ravi Shyam Singh Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/my_resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
