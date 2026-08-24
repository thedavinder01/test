// ==========================================
// CYBER SECURITY EXAM SYSTEM
// 60 MCQ + 15 NON-MCQ = 75 QUESTIONS
// ==========================================

const MCQS = [
  ["What does CIA stand for in cybersecurity?",
    "Confidentiality, Integrity, Availability",
    "Central Intelligence Agency",
    "Computer Information Access",
    "Cyber Internet Authority", "A"],

  ["Which of the following is a type of malware?",
    "Firewall", "Trojan", "Router", "Switch", "B"],

  ["What is phishing?",
    "A network cable",
    "A fraudulent attempt to obtain sensitive information",
    "A backup method",
    "A firewall rule", "B"],

  ["Which password is strongest?",
    "12345678", "password123", "P@ssw0rd", "T9#vL2!qZ7@", "D"],

  ["What is antivirus software used for?",
    "Creating websites",
    "Detecting and removing malware",
    "Increasing RAM",
    "Managing printers", "B"],

  ["What is authentication?",
    "Verifying a user's identity",
    "Encrypting a hard disk",
    "Deleting files",
    "Scanning a network", "A"],

  ["What is authorization?",
    "Verifying identity",
    "Determining what an authenticated user is allowed to access",
    "Changing a password",
    "Installing antivirus", "B"],

  ["What is ransomware?",
    "Malware that encrypts or locks data for payment",
    "A backup tool",
    "A network protocol",
    "A password manager", "A"],

  ["What is a firewall?",
    "A device or software that controls network traffic",
    "A type of malware",
    "A programming language",
    "A storage device", "A"],

  ["What does VPN commonly provide?",
    "A secure encrypted connection over a network",
    "Free antivirus",
    "Extra RAM",
    "A faster CPU", "A"],

  ["Which is an example of multi-factor authentication?",
    "Password only",
    "Username only",
    "Password plus OTP",
    "Security question only", "C"],

  ["What is social engineering?",
    "Manipulating people to reveal information or perform actions",
    "Writing software",
    "Building a server",
    "Encrypting files", "A"],

  ["Which is a common sign of a phishing email?",
    "Unexpected request for sensitive information",
    "Normal company footer",
    "Known sender with expected content",
    "Correct spelling only", "A"],

  ["What is malware?",
    "Malicious software",
    "A hardware component",
    "A secure protocol",
    "A backup server", "A"],

  ["Why are software updates important?",
    "They can fix security vulnerabilities",
    "They always increase storage",
    "They remove the internet",
    "They disable firewalls", "A"],

  ["What is a security patch?",
    "An update that fixes vulnerabilities or bugs",
    "A type of password",
    "A network cable",
    "A backup disk", "A"],

  ["What does data confidentiality mean?",
    "Only authorized parties can access data",
    "Data is always available",
    "Data is deleted",
    "Data is compressed", "A"],

  ["What does data integrity mean?",
    "Data remains accurate and unaltered without authorization",
    "Data is public",
    "Data is hidden forever",
    "Data is backed up hourly", "A"],

  ["What does availability mean in the CIA Triad?",
    "Authorized users can access resources when needed",
    "Data is encrypted",
    "Passwords are complex",
    "Files are deleted", "A"],

  ["What is a brute-force attack?",
    "Trying many password combinations",
    "Sending a backup",
    "Updating software",
    "Encrypting a file", "A"],

  ["What is a security policy?",
    "A set of rules and guidelines for protecting information and systems",
    "A type of malware",
    "A router",
    "A programming language", "A"],

  ["What is a backup?",
    "A copy of data kept for recovery",
    "A firewall rule",
    "A password attack",
    "A network scan", "A"],

  ["What is an insider threat?",
    "A threat originating from someone with authorized access",
    "A threat from weather",
    "A broken cable",
    "A software update", "A"],

  ["Why should you avoid using the same password everywhere?",
    "One compromised password could expose multiple accounts",
    "It makes login faster",
    "It increases storage",
    "It disables MFA", "A"],

  ["What is cyber hygiene?",
    "Regular practices that keep systems and accounts secure",
    "Cleaning computer hardware",
    "Deleting all files",
    "Installing games", "A"],

  // INTERMEDIATE
  ["What is an IP address used for?",
    "Identifying a device/interface on a network",
    "Encrypting files",
    "Creating passwords",
    "Removing malware", "A"],

  ["Which protocol is commonly used for secure web browsing?",
    "HTTP", "FTP", "HTTPS", "Telnet", "C"],

  ["Which port is commonly associated with HTTPS?",
    "21", "22", "80", "443", "D"],

  ["Which protocol securely transfers files over SSH?",
    "SFTP", "HTTP", "SMTP", "DNS", "A"],

  ["What does DNS do?",
    "Maps domain names to IP addresses",
    "Encrypts all traffic",
    "Blocks malware",
    "Stores passwords", "A"],

  ["What is TCP?",
    "A reliable connection-oriented transport protocol",
    "A firewall",
    "A file system",
    "A malware type", "A"],

  ["What is UDP?",
    "A connectionless transport protocol",
    "An encryption algorithm",
    "A web server",
    "A password manager", "A"],

  ["What is a MAC address?",
    "A hardware/network interface address",
    "A domain name",
    "A password",
    "A port number", "A"],

  ["What is subnetting?",
    "Dividing a network into smaller logical networks",
    "Encrypting a disk",
    "Deleting packets",
    "Creating malware", "A"],

  ["What is NAT commonly used for?",
    "Translating private and public IP addresses",
    "Encrypting passwords",
    "Scanning files",
    "Creating certificates", "A"],

  ["What is a proxy server?",
    "An intermediary between a client and another server",
    "A malware scanner only",
    "A hard drive",
    "A password", "A"],

  ["What is IDS?",
    "Intrusion Detection System",
    "Internet Data Service",
    "Internal Domain Server",
    "Identity Defense Software", "A"],

  ["What is IPS?",
    "Intrusion Prevention System",
    "Internet Protection Service",
    "Internal Port Scanner",
    "Identity Protocol Server", "A"],

  ["What is a DDoS attack?",
    "Overwhelming a service with traffic from many sources",
    "Stealing a password by guessing",
    "Encrypting a database",
    "Scanning a USB drive", "A"],

  ["What is encryption?",
    "Converting readable data into protected ciphertext",
    "Deleting data",
    "Compressing RAM",
    "Scanning ports", "A"],

  ["What is hashing?",
    "One-way transformation commonly used for integrity and password storage",
    "Reversible file compression",
    "Network routing",
    "User authentication only", "A"],

  ["Which is a symmetric encryption algorithm?",
    "AES", "RSA", "ECC", "DSA", "A"],

  ["Which is an asymmetric cryptographic algorithm?",
    "AES", "ChaCha20", "RSA", "DES", "C"],

  ["What is a digital certificate primarily used for?",
    "Binding an identity to a public key",
    "Increasing disk space",
    "Blocking all malware",
    "Creating IP addresses", "A"],

  ["What is TLS mainly used for?",
    "Securing communications over networks",
    "Formatting disks",
    "Scanning ports",
    "Managing RAM", "A"],

  ["What is a vulnerability?",
    "A weakness that can be exploited",
    "A backup",
    "A firewall",
    "A user account", "A"],

  ["What is an exploit?",
    "A method or code that takes advantage of a vulnerability",
    "A password policy",
    "A backup plan",
    "A network cable", "A"],

  ["What is patch management?",
    "The process of identifying, testing, and deploying updates",
    "Deleting user accounts",
    "Monitoring CPU temperature",
    "Creating domains", "A"],

  ["What is network segmentation?",
    "Dividing a network to limit access and reduce attack impact",
    "Making passwords shorter",
    "Removing encryption",
    "Increasing screen resolution", "A"],

  ["What is least privilege?",
    "Giving users only the access they need",
    "Giving everyone administrator access",
    "Removing authentication",
    "Sharing passwords", "A"],

  // ADVANCED
  ["What is SQL injection?",
    "Injecting malicious SQL into application input to manipulate database queries",
    "Encrypting SQL databases",
    "Scanning Wi-Fi",
    "Blocking DNS", "A"],

  ["What is XSS?",
    "A web vulnerability involving injected client-side scripts",
    "A network protocol",
    "A password algorithm",
    "A backup method", "A"],

  ["What is CSRF?",
    "An attack that tricks a user's browser into performing an unwanted authenticated action",
    "A malware scanner",
    "A cryptographic hash",
    "A routing protocol", "A"],

  ["What is the OWASP Top 10?",
    "A widely used awareness list of major web application security risks",
    "A Linux command list",
    "A firewall standard",
    "A password database", "A"],

  ["What is privilege escalation?",
    "Gaining higher privileges than originally authorized",
    "Reducing permissions",
    "Encrypting files",
    "Changing IP addresses", "A"],

  ["What is a zero-day vulnerability?",
    "A vulnerability unknown or without an available patch at the time of exploitation/discovery",
    "A vulnerability fixed years ago",
    "A network outage",
    "A backup error", "A"],

  ["What is SIEM?",
    "Security Information and Event Management",
    "Secure Internet Encryption Method",
    "System Identity Email Manager",
    "Security Interface Endpoint Module", "A"],

  ["What is EDR?",
    "Endpoint Detection and Response",
    "Encrypted Data Router",
    "External DNS Resolver",
    "Endpoint Domain Registry", "A"],

  ["What is threat intelligence?",
    "Information about threats used to improve security decisions",
    "A password list",
    "A backup copy",
    "A firewall cable", "A"],

  ["What is incident response?",
    "A structured process for detecting, containing, investigating, and recovering from security incidents",
    "Installing games",
    "Creating websites",
    "Changing monitors", "A"],

];


// ==========================================
// 15 NON-MCQ QUESTIONS
// ==========================================

const NON_MCQS = [
  "Explain the CIA Triad and give one practical example for each component.",

  "Explain the difference between authentication and authorization.",

  "Describe how a phishing attack can compromise a user's account.",

  "Explain the working purpose of a firewall in a network.",

  "What is ransomware? Explain two ways an organization can reduce ransomware risk.",

  "Explain symmetric and asymmetric encryption with one example of each.",

  "Explain the difference between hashing and encryption.",

  "Describe SQL Injection and mention two prevention techniques.",

  "Explain Cross-Site Scripting (XSS) and how developers can prevent it.",

  "What is a DDoS attack? Explain two mitigation techniques.",

  "Explain the principle of least privilege with a practical example.",

  "Describe the steps of a basic cybersecurity incident response process.",

  "What is SIEM? Explain how it helps a security team.",

  "Explain Zero Trust security and why traditional perimeter security is not sufficient.",

  "Design a basic defense-in-depth security strategy for a small organization."
];


// ==========================================
// GLOBAL VARIABLES
// ==========================================

let questions = [];
let currentQuestion = 0;
let answers = {};
let timerSeconds = 3600;
let timerInterval = null;

let currentAttemptId = null;
let evaluatingId = null;


// ==========================================
// START EXAM
// ==========================================

function startExam() {

  const name = document
    .getElementById("studentName")
    .value
    .trim();

  const roll = document
    .getElementById("rollNo")
    .value
    .trim();

  const branch = document
    .getElementById("studentBranch")
    .value
    .trim();

  const section = document
    .getElementById("studentSection")
    .value
    .trim();

  const year = document
    .getElementById("studentYear")
    .value
    .trim();

  if (!name || !roll || !branch || !section || !year) {
    alert("Please enter Student Name, Roll Number, Branch, Section and Year.");
    return;
  }

  const confirmStart = confirm(
    "Start the 60-minute Cyber Security Exam?\n\n" +
    "60 MCQ + 15 Non-MCQ (75 Questions)\n\n" +
    "Once you move to the next question, the previous one is locked and cannot be revisited or edited."
  );

  if (!confirmStart) return;


  currentAttemptId = Date.now().toString();

  currentQuestion = 0;

  answers = {};

  timerSeconds = 3600;


  // Create question array

  questions = [

    ...MCQS.map((item) => ({
      type: "MCQ",
      question: item[0],
      options: item.slice(1, 5),
      correctAnswer: item[5],
      marks: 1
    })),

    ...NON_MCQS.map((question, index) => ({
      type: "NON-MCQ",
      question: question,
      options: null,
      correctAnswer: null,

      // First 10 = 2 marks
      // Last 5 = 4 marks
      marks: index < 10 ? 2 : 4
    }))

  ];


  // Save attempt

  const attempts =
    JSON.parse(
      localStorage.getItem("cyberAttempts") || "[]"
    );


  attempts.push({

    id: currentAttemptId,

    name: name,

    roll: roll,

    branch: branch,

    section: section,

    year: year,

    answers: {},

    mcqScore: 0,

    nonMcqScore: 0,

    total: 0,

    status: "Pending",

    submittedAt:
      new Date().toISOString()

  });


  localStorage.setItem(
    "cyberAttempts",
    JSON.stringify(attempts)
  );


  showPage("examPage");

  renderQuestion();

  startTimer();

}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {

    timerSeconds--;

    const minutes =
      String(
        Math.floor(timerSeconds / 60)
      ).padStart(2, "0");

    const seconds =
      String(
        timerSeconds % 60
      ).padStart(2, "0");


    document.getElementById(
      "timer"
    ).textContent =
      `${minutes}:${seconds}`;


    if (timerSeconds <= 0) {

      clearInterval(timerInterval);

      alert(
        "Time is over. Your exam will be submitted automatically."
      );

      submitExam(true);

    }

  }, 1000);

}


// ==========================================
// DISPLAY QUESTION
// ==========================================

function renderQuestion() {

  const question =
    questions[currentQuestion];


  document.getElementById(
    "questionType"
  ).textContent =
    question.type === "MCQ"
      ? "🟩 MCQ"
      : "🟦 NON-MCQ";


  document.getElementById(
    "questionNumber"
  ).textContent =
    `Question ${currentQuestion + 1} / 75 • ${question.marks} Marks`;


  document.getElementById(
    "questionText"
  ).textContent =
    question.question;


  const answerArea =
    document.getElementById(
      "answerArea"
    );


  // MCQ

  if (question.type === "MCQ") {

    answerArea.innerHTML =
      question.options
        .map((option, index) => {

          const letter =
            String.fromCharCode(
              65 + index
            );


          const checked =
            answers[currentQuestion] ===
            letter
              ? "checked"
              : "";


          return `

            <label class="option">

              <input

                type="radio"

                name="mcq"

                value="${letter}"

                ${checked}

                onchange="saveCurrentAnswer(this.value)"

              >

              <b>${letter}.</b>

              ${escapeHTML(option)}

            </label>

          `;

        })
        .join("");

  }


  // NON-MCQ

  else {

    answerArea.innerHTML = `

      <textarea

        class="answer-box"

        placeholder="Type your answer here..."

        oninput="saveCurrentAnswer(this.value)"

      >${escapeHTML(
        answers[currentQuestion] || ""
      )}</textarea>

    `;

  }


  renderPalette();

}


// ==========================================
// SAVE ANSWER
// ==========================================

function saveCurrentAnswer(value) {

  answers[currentQuestion] =
    value;

  saveAttempt();

  renderPalette();

}


// ==========================================
// SAVE ATTEMPT
// ==========================================

function saveAttempt() {

  const attempts =
    JSON.parse(
      localStorage.getItem("cyberAttempts") || "[]"
    );


  const attempt =
    attempts.find(
      item =>
        item.id === currentAttemptId
    );


  if (!attempt) return;


  attempt.answers =
    answers;


  localStorage.setItem(
    "cyberAttempts",
    JSON.stringify(attempts)
  );

}


// ==========================================
// QUESTION PALETTE
// ==========================================

function renderPalette() {

  const palette =
    document.getElementById(
      "palette"
    );


  palette.innerHTML =
    questions
      .map((question, index) => {

        const answered =
          answers[index] !== undefined &&
          String(
            answers[index]
          ).trim() !== "";


        let classes = "";


        if (answered)
          classes += "answered ";


        if (
          question.type ===
          "NON-MCQ"
        )
          classes += "nonmcq ";


        if (
          index ===
          currentQuestion
        )
          classes += "active ";


        const locked =
          index < currentQuestion;

        if (locked)
          classes += "locked ";


        return `

          <button

            class="${classes}"

            ${locked ? "disabled" : ""}

            title="${locked ? "Locked — already answered" : `Question ${index + 1}`}"

            onclick="goToQuestion(${index})"

          >

            ${locked ? "🔒" : index + 1}

          </button>

        `;

      })
      .join("");

}


// ==========================================
// GO TO QUESTION
// (forward-only: a question already left
// behind is locked and cannot be revisited)
// ==========================================

function goToQuestion(index) {

  if (index < currentQuestion) {
    // Locked — already passed, cannot go back to edit
    return;
  }

  currentQuestion =
    index;

  renderQuestion();

}


// ==========================================
// NEXT
// (moving on locks the current question
// forever — no way back to edit it)
// ==========================================

function nextQuestion() {

  if (
    currentQuestion <
    questions.length - 1
  ) {

    currentQuestion++;

    renderQuestion();

  }

}


// ==========================================
// CLEAR ANSWER
// (only the current, still-unlocked
// question can be cleared)
// ==========================================

function clearAnswer() {

  delete answers[
    currentQuestion
  ];

  saveAttempt();

  renderQuestion();

}


// ==========================================
// SUBMIT EXAM
// ==========================================

function submitExam(force = false) {

  if (!force) {

    const confirmation =
      confirm(
        "Are you sure you want to submit the exam?"
      );

    if (!confirmation)
      return;

  }


  saveAttempt();

  clearInterval(
    timerInterval
  );


  const attempts =
    JSON.parse(
      localStorage.getItem(
        "cyberAttempts"
      ) || "[]"
    );


  const attempt =
    attempts.find(
      item =>
        item.id === currentAttemptId
    );


  if (!attempt)
    return;


  // Automatically calculate MCQ

  let mcqScore = 0;

  let mcqCorrectCount = 0;


  for (
    let i = 0;
    i < 60;
    i++
  ) {

    if (
      answers[i] ===
      MCQS[i][5]
    ) {

      mcqScore++;

      mcqCorrectCount++;

    }

  }


  attempt.mcqScore =
    mcqScore;


  // Automatically calculate Non-MCQ
  // (full marks if answered, 0 if left blank —
  // no manual evaluation required)

  const nonMcqMarks = [];

  let nonMcqScore = 0;

  let nonMcqAnsweredCount = 0;


  for (
    let i = 0;
    i < NON_MCQS.length;
    i++
  ) {

    const maxMarks =
      i < 10
        ? 2
        : 4;

    const studentAnswer =
      (
        answers[i + 60] ||
        ""
      ).trim();


    if (studentAnswer) {

      nonMcqMarks.push(
        maxMarks
      );

      nonMcqScore +=
        maxMarks;

      nonMcqAnsweredCount++;

    } else {

      nonMcqMarks.push(0);

    }

  }


  attempt.nonMcqMarks =
    nonMcqMarks;

  attempt.nonMcqScore =
    nonMcqScore;

  attempt.total =
    mcqScore +
    nonMcqScore;

  attempt.correctCount =
    mcqCorrectCount +
    nonMcqAnsweredCount;

  attempt.percentage =
    Math.round(
      (
        (mcqScore + nonMcqScore) /
        100
      ) * 10000
    ) / 100;


  // Fully auto-graded — no admin
  // evaluation step required

  attempt.status =
    "Evaluated";


  attempt.submittedAt =
    new Date().toISOString();


  localStorage.setItem(
    "cyberAttempts",
    JSON.stringify(attempts)
  );


  // IMPORTANT:
  // Student result is NOT shown

  showPage(
    "submittedPage"
  );

}


// ==========================================
// PAGE SWITCH
// ==========================================

function showPage(pageID) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.add(
        "hidden"
      );

    });


  document
    .getElementById(pageID)
    .classList.remove(
      "hidden"
    );

}


// ==========================================
// ADMIN LOGIN PAGE
// ==========================================

function showAdminLogin() {

  showPage(
    "adminLoginPage"
  );

}


// ==========================================
// BACK TO STUDENT LOGIN
// ==========================================

function backToStudent() {

  showPage(
    "loginPage"
  );

}


// ==========================================
// ADMIN LOGIN
// ==========================================

function adminLogin() {

  const username =
    document.getElementById(
      "adminUser"
    ).value;


  const password =
    document.getElementById(
      "adminPass"
    ).value;


  /*
     DEMO LOGIN

     Username:
     Anubhav

     Password:
     Anubhav@980

     Real system should use
     server-side authentication.
  */


  if (
    username === "Anubhav" &&
    password === "Anubhav@980"
  ) {

    showPage(
      "adminPage"
    );

    renderAdmin();

  }

  else {

    document.getElementById(
      "adminError"
    ).textContent =
      "Invalid Admin Username or Password.";

  }

}


// ==========================================
// ADMIN LOGOUT
// ==========================================

function adminLogout() {

  showPage(
    "adminLoginPage"
  );

}


// ==========================================
// ADMIN DASHBOARD
// ==========================================

function renderAdmin() {

  const attempts =
    JSON.parse(
      localStorage.getItem(
        "cyberAttempts"
      ) || "[]"
    );


  // Sort by total score

  attempts.sort(
    (a, b) =>
      (b.total || 0) -
      (a.total || 0)
  );


  const evaluated =
    attempts.filter(
      attempt =>
        attempt.status ===
        "Evaluated"
    ).length;


  document.getElementById(
    "totalStudents"
  ).textContent =
    attempts.length;


  document.getElementById(
    "evaluatedStudents"
  ).textContent =
    evaluated;


  document.getElementById(
    "pendingStudents"
  ).textContent =
    attempts.length -
    evaluated;


  const tbody =
    document.querySelector(
      "#resultsTable tbody"
    );


  tbody.innerHTML =
    attempts
      .map(
        (attempt, index) => {

          const rank =
            attempt.status ===
            "Evaluated"
              ? index + 1
              : "—";


          const percentage =
            attempt.percentage !== undefined
              ? attempt.percentage
              : (attempt.total || 0);


          return `

            <tr>

              <td>${rank}</td>

              <td>
                ${escapeHTML(
                  attempt.name
                )}
              </td>

              <td>
                ${escapeHTML(
                  attempt.roll
                )}
              </td>

              <td>
                ${escapeHTML(
                  attempt.branch || ""
                )}
              </td>

              <td>
                ${escapeHTML(
                  attempt.section || ""
                )}
              </td>

              <td>
                ${escapeHTML(
                  attempt.year || ""
                )}
              </td>

              <td>
                ${attempt.mcqScore}/60
              </td>

              <td>
                ${attempt.nonMcqScore || 0}/40
              </td>

              <td>
                ${attempt.total || 0}/100
              </td>

              <td>
                ${attempt.correctCount || 0}/75
              </td>

              <td>
                ${percentage}%
              </td>

              <td>

                <span class="${
                  attempt.status ===
                  "Evaluated"
                    ? "status-done"
                    : "status-pending"
                }">

                  ${attempt.status}

                </span>

              </td>

              <td>

                <button
                  onclick="openEvaluation('${attempt.id}')"
                >

                  Review

                </button>

              </td>

            </tr>

          `;

        }
      )
      .join("");

}


// ==========================================
// OPEN NON-MCQ EVALUATION
// ==========================================

function openEvaluation(id) {

  evaluatingId =
    id;


  const attempts =
    JSON.parse(
      localStorage.getItem(
        "cyberAttempts"
      ) || "[]"
    );


  const attempt =
    attempts.find(
      item =>
        item.id === id
    );


  if (!attempt)
    return;


  document.getElementById(
    "evalTitle"
  ).textContent =
    `Full Review (Q1–75) — ${attempt.name} (${attempt.roll}, ${attempt.branch || "-"}, ${attempt.section || "-"}, ${attempt.year || "-"})`;


  const container =
    document.getElementById(
      "evalQuestions"
    );


  // ======================================
  // MCQ SECTION (Q1 - Q60) — read only,
  // auto-graded, shown for admin review
  // ======================================

  const mcqHTML =
    MCQS
      .map(
        (item, index) => {

          const question = item[0];
          const options = item.slice(1, 5);
          const correctLetter = item[5];
          const optionLetters = ["A", "B", "C", "D"];

          const studentLetter =
            attempt.answers[index] || "";

          const isCorrect =
            studentLetter === correctLetter;

          const studentText =
            studentLetter
              ? `${studentLetter}. ${options[optionLetters.indexOf(studentLetter)] || ""}`
              : "";

          const correctText =
            `${correctLetter}. ${options[optionLetters.indexOf(correctLetter)]}`;

          return `

            <div class="eval-item">

              <b>
                Q${index + 1}
                (1 Mark)
                — <span class="${isCorrect ? "status-done" : "status-pending"}">
                  ${studentLetter ? (isCorrect ? "Correct" : "Wrong") : "Not Answered"}
                </span>
              </b>

              <p>
                ${escapeHTML(question)}
              </p>

              <p>
                <b>Student Answer:</b>
                ${
                  studentLetter
                    ? escapeHTML(studentText)
                    : '<span class="no-answer">Not Answered</span>'
                }
              </p>

              <p>
                <b>Correct Answer:</b>
                ${escapeHTML(correctText)}
              </p>

            </div>

          `;

        }
      )
      .join("");


  // ======================================
  // NON-MCQ SECTION (Q61 - Q75) —
  // editable marks for admin evaluation
  // ======================================

  const nonMcqHTML =
    NON_MCQS
      .map(
        (question, index) => {

          const answer =
            attempt.answers[
              index + 60
            ] || "";


          const maxMarks =
            index < 10
              ? 2
              : 4;


          const oldMarks =
            (
              attempt.nonMcqMarks ||
              []
            )[index] ?? "";


          return `

            <div class="eval-item">

              <b>
                Q${index + 61}
                (${maxMarks} Marks)
              </b>

              <p>
                ${escapeHTML(
                  question
                )}
              </p>

              <p>

                <b>
                  Student Answer:
                </b>

                ${
                  answer
                    ? escapeHTML(answer)
                    : '<span class="no-answer">Not Answered</span>'
                }

              </p>

              <input

                class="marks-input"

                id="mark_${index}"

                type="number"

                min="0"

                max="${maxMarks}"

                value="${oldMarks}"

                placeholder="Marks / ${maxMarks}"

              >

            </div>

          `;

        }
      )
      .join("");


  container.innerHTML =
    mcqHTML +
    nonMcqHTML;


  document
    .getElementById(
      "evaluationBox"
    )
    .classList.remove(
      "hidden"
    );


  window.scrollTo({
    top:
      document.body
        .scrollHeight,
    behavior:
      "smooth"
  });

}


// ==========================================
// SAVE NON-MCQ EVALUATION
// ==========================================

function saveEvaluation() {

  const attempts =
    JSON.parse(
      localStorage.getItem(
        "cyberAttempts"
      ) || "[]"
    );


  const attempt =
    attempts.find(
      item =>
        item.id ===
        evaluatingId
    );


  if (!attempt)
    return;


  const marks = [];


  for (
    let i = 0;
    i < NON_MCQS.length;
    i++
  ) {

    const max =
      i < 10
        ? 2
        : 4;


    let value =
      Number(
        document.getElementById(
          `mark_${i}`
        ).value
      );


    if (
      !Number.isFinite(
        value
      )
    ) {

      value = 0;

    }


    if (value < 0)
      value = 0;


    if (value > max)
      value = max;


    marks.push(
      value
    );

  }


  attempt.nonMcqMarks =
    marks;


  attempt.nonMcqScore =
    marks.reduce(
      (total, mark) =>
        total + mark,
      0
    );


  attempt.total =
    attempt.mcqScore +
    attempt.nonMcqScore;


  attempt.correctCount =
    (
      attempt.mcqScore || 0
    ) +
    marks.filter(
      mark => mark > 0
    ).length;


  attempt.percentage =
    Math.round(
      (
        attempt.total / 100
      ) * 10000
    ) / 100;


  attempt.status =
    "Evaluated";


  localStorage.setItem(
    "cyberAttempts",
    JSON.stringify(
      attempts
    )
  );


  closeEvaluation();

  renderAdmin();

}


// ==========================================
// CLOSE EVALUATION
// ==========================================

function closeEvaluation() {

  document
    .getElementById(
      "evaluationBox"
    )
    .classList.add(
      "hidden"
    );


  evaluatingId =
    null;

}


// ==========================================
// EXPORT EXCEL
// ==========================================

function exportExcel() {

  if (
    typeof XLSX ===
    "undefined"
  ) {

    alert(
      "Excel library could not load. Please check your internet connection."
    );

    return;

  }


  const attempts =
    JSON.parse(
      localStorage.getItem(
        "cyberAttempts"
      ) || "[]"
    );


  // Sort by score

  attempts.sort(
    (a, b) =>
      (b.total || 0) -
      (a.total || 0)
  );


  // ======================================
  // SUMMARY SHEET
  // ======================================

  const summary =
    attempts.map(
      (attempt, index) => ({

        Rank:
          attempt.status ===
          "Evaluated"
            ? index + 1
            : "",

        "Student Name":
          attempt.name,

        "Roll No.":
          attempt.roll,

        "Branch":
          attempt.branch || "",

        "Section":
          attempt.section || "",

        "Year":
          attempt.year || "",

        "MCQ Score":
          attempt.mcqScore,

        "Non-MCQ Score":
          attempt.nonMcqScore || 0,

        "Total Score":
          attempt.total || 0,

        "Correct / 75":
          attempt.correctCount || 0,

        "Percentage":
          attempt.percentage !== undefined
            ? attempt.percentage
            : (attempt.total || 0),

        Status:
          attempt.status,

        "Submitted At":
          attempt.submittedAt

      })
    );


  const workbook =
    XLSX.utils.book_new();


  const summarySheet =
    XLSX.utils.json_to_sheet(
      summary
    );


  XLSX.utils.book_append_sheet(
    workbook,
    summarySheet,
    "Results"
  );


  // ======================================
  // DETAILED RESPONSE SHEET
  // ======================================

  const details =
    attempts.map(
      (attempt, index) => {

        const row = {

          Rank:
            attempt.status ===
            "Evaluated"
              ? index + 1
              : "",

          Name:
            attempt.name,

          RollNo:
            attempt.roll,

          Branch:
            attempt.branch || "",

          Section:
            attempt.section || "",

          Year:
            attempt.year || "",

          MCQ:
            attempt.mcqScore,

          NonMCQ:
            attempt.nonMcqScore || 0,

          Total:
            attempt.total || 0,

          Status:
            attempt.status

        };


        // MCQ Answers

        for (
          let i = 0;
          i < 60;
          i++
        ) {

          row[
            `Q${i + 1}`
          ] =
            attempt.answers[
              i
            ] || "";

        }


        // Non-MCQ Answers

        for (
          let i = 0;
          i < 15;
          i++
        ) {

          row[
            `Q${i + 61}`
          ] =
            attempt.answers[
              i + 60
            ] || "";

        }


        return row;

      }
    );


  const detailSheet =
    XLSX.utils.json_to_sheet(
      details
    );


  XLSX.utils.book_append_sheet(
    workbook,
    detailSheet,
    "Detailed Responses"
  );


  // ======================================
  // DOWNLOAD
  // ======================================

  XLSX.writeFile(
    workbook,
    "Cyber_Security_Exam_Results.xlsx"
  );

}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(value) {

  return String(
    value ?? ""
  ).replace(
    /[&<>"']/g,
    character => {

      const entities = {

        "&":
          "&amp;",

        "<":
          "&lt;",

        ">":
          "&gt;",

        '"':
          "&quot;",

        "'":
          "&#039;"

      };


      return entities[
        character
      ];

    }
  );

}


// ==========================================
// PREVENT ACCIDENTAL PAGE CLOSE
// ==========================================

window.addEventListener(
  "beforeunload",
  event => {

    const examPage =
      document.getElementById(
        "examPage"
      );


    if (
      examPage &&
      !examPage.classList.contains(
        "hidden"
      )
    ) {

      event.preventDefault();

      event.returnValue = "";

    }

  }
);