document.getElementById("downloadCV").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Profile Photo Settings
    const imgUrl = "https://avatars.githubusercontent.com/u/32985729";
    const fallbackUrl = "https://via.placeholder.com/150"; // Fallback image
    const imgSize = 50; // Size in mm
    const imgX = (210 - imgSize) / 2; // Centering
    const imgY = 10;

    // Create a circular mask for the profile photo
    doc.setFillColor(255, 255, 255);
    doc.circle(imgX + imgSize / 2, imgY + imgSize / 2, imgSize / 2, "F");
    doc.addImage(imgUrl, "JPEG", imgX, imgY, imgSize, imgSize, "", "FAST", () => {
        // If loading fails, use fallback image
        doc.addImage(fallbackUrl, "JPEG", imgX, imgY, imgSize, imgSize);
    });

    // Name & Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Your Name", 105, imgY + imgSize + 15, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Web Developer | Designer | Problem Solver", 105, imgY + imgSize + 25, { align: "center" });

    // About Me
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("About Me", 20, imgY + imgSize + 45);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(
        "Hello, I'm a passionate web developer with a focus on creating efficient and user-friendly web applications.",
        20, imgY + imgSize + 55, { maxWidth: 170 }
    );

    // Skills
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Skills", 20, imgY + imgSize + 80);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("- HTML, CSS, JavaScript", 20, imgY + imgSize + 90);
    doc.text("- React, Node.js, Express", 20, imgY + imgSize + 100);
    doc.text("- Version Control (Git, GitHub)", 20, imgY + imgSize + 110);
    doc.text("- UI/UX Design", 20, imgY + imgSize + 120);
    doc.text("- Problem-solving and Debugging", 20, imgY + imgSize + 130);

    // Experience
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Experience", 20, imgY + imgSize + 150);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Software Developer - ABC Tech (Jan 2022 - Present)", 20, imgY + imgSize + 160);
    doc.text("Developed and maintained web applications using JavaScript, React, and Node.js.", 20, imgY + imgSize + 170, { maxWidth: 170 });

    doc.text("Frontend Developer Intern - XYZ Company (June 2021 - Dec 2021)", 20, imgY + imgSize + 185);
    doc.text("Worked on UI components and optimized website performance.", 20, imgY + imgSize + 195, { maxWidth: 170 });

    // Contact Info
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("Contact", 20, imgY + imgSize + 215);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Email: yourname@example.com", 20, imgY + imgSize + 225);
    doc.text("Phone: +123 456 7890", 20, imgY + imgSize + 235);

    doc.save("Your_Name_CV.pdf");
});
