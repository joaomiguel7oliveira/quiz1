const quizzes = [
  {
    id: "redes-web",
    title: "Redes e Web",
    description: "Camadas OSI, HTML e lógica de programação.",
    duration: "8 min",
    questions: [
      {
        id: "q1",
        type: "single-choice",
        title: "Qual camada do modelo OSI é responsável pelo roteamento?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "Aplicação" },
          { value: "b", label: "Rede" },
          { value: "c", label: "Enlace" },
          { value: "d", label: "Física" }
        ],
        correctAnswer: "b"
      },
      {
        id: "q2",
        type: "single-choice",
        title: "Em HTML, qual tag representa o título principal da página?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "<header>" },
          { value: "b", label: "<h6>" },
          { value: "c", label: "<h1>" },
          { value: "d", label: "<title>" }
        ],
        correctAnswer: "c"
      },
      {
        id: "q3",
        type: "single-choice",
        title: "Qual estrutura repete um bloco enquanto a condição é verdadeira, em JavaScript?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "if" },
          { value: "b", label: "switch" },
          { value: "c", label: "while" },
          { value: "d", label: "const" }
        ],
        correctAnswer: "c"
      }
    ]
  },
  {
    id: "seguranca-digital",
    title: "Segurança Digital",
    description: "Boas práticas de senhas, phishing e autenticação.",
    duration: "6 min",
    questions: [
      {
        id: "q1",
        type: "single-choice",
        title: "Qual opção é um exemplo de autenticação em dois fatores?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "Somente senha" },
          { value: "b", label: "Senha e código no celular" },
          { value: "c", label: "Apenas biometria" },
          { value: "d", label: "Apenas e-mail" }
        ],
        correctAnswer: "b"
      },
      {
        id: "q2",
        type: "single-choice",
        title: "Qual destas atitudes ajuda a evitar phishing?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "Clicar em qualquer link recebido" },
          { value: "b", label: "Ignorar o endereço do remetente" },
          { value: "c", label: "Verificar domínio e origem da mensagem" },
          { value: "d", label: "Compartilhar senha por chat" }
        ],
        correctAnswer: "c"
      }
    ]
  },
  {
    id: "logica",
    title: "Lógica de Programação",
    description: "Condições, repetições e operadores.",
    duration: "7 min",
    questions: [
      {
        id: "q1",
        type: "single-choice",
        title: "Qual operador representa igualdade estrita em JavaScript?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "=" },
          { value: "b", label: "==" },
          { value: "c", label: "===" },
          { value: "d", label: "!=" }
        ],
        correctAnswer: "c"
      },
      {
        id: "q2",
        type: "single-choice",
        title: "Qual laço executa ao menos uma vez, mesmo com condição falsa?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "while" },
          { value: "b", label: "for" },
          { value: "c", label: "do...while" },
          { value: "d", label: "if" }
        ],
        correctAnswer: "c"
      }
    ]
  },
  {
    id: "teoria-cores",
    title: "Teoria das Cores",
    description: "Modelos de cor, roda cromática, harmonia e percepção visual.",
    duration: "9 min",
    questions: [
      {
        id: "q1",
        type: "single-choice",
        title: "Quais são as cores primárias no modelo aditivo de luz (RGB)?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "Ciano, Magenta e Amarelo" },
          { value: "b", label: "Vermelho, Amarelo e Azul" },
          { value: "c", label: "Vermelho, Verde e Azul" },
          { value: "d", label: "Laranja, Verde e Violeta" }
        ],
        correctAnswer: "c"
      },
      {
        id: "q2",
        type: "single-choice",
        title: "No modelo subtrativo (pigmento/impressão), quais são as cores primárias?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "Vermelho, Verde e Azul" },
          { value: "b", label: "Vermelho, Amarelo e Azul" },
          { value: "c", label: "Ciano, Magenta e Amarelo" },
          { value: "d", label: "Preto, Branco e Cinza" }
        ],
        correctAnswer: "c"
      },
      {
        id: "q3",
        type: "single-choice",
        title: "O que são cores complementares?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "Cores adjacentes na roda de cores" },
          { value: "b", label: "Cores opostas na roda de cores (180°)" },
          { value: "c", label: "Cores da mesma família cromática" },
          { value: "d", label: "Cores com igual saturação" }
        ],
        correctAnswer: "b"
      },
      {
        id: "q4",
        type: "single-choice",
        title: "O que é a saturação de uma cor?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "O grau de luminosidade ou escuridão da cor" },
          { value: "b", label: "A temperatura percebida da cor" },
          { value: "c", label: "A intensidade ou pureza da cor" },
          { value: "d", label: "O ângulo da cor na roda cromática" }
        ],
        correctAnswer: "c"
      },
      {
        id: "q5",
        type: "single-choice",
        title: "Qual esquema de harmonia utiliza três cores equidistantes (120°) na roda de cores?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "Análogo" },
          { value: "b", label: "Monocromático" },
          { value: "c", label: "Complementar" },
          { value: "d", label: "Triádico" }
        ],
        correctAnswer: "d"
      },
      {
        id: "q6",
        type: "single-choice",
        title: "No modelo HSB/HSV, o que o componente 'V' (Value/Brightness) representa?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "A pureza da cor" },
          { value: "b", label: "O grau de luminosidade da cor" },
          { value: "c", label: "O ângulo na roda de cores" },
          { value: "d", label: "A temperatura da cor" }
        ],
        correctAnswer: "b"
      },
      {
        id: "q7",
        type: "single-choice",
        title: "Cores análogas são aquelas que:",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "São opostas na roda de cores" },
          { value: "b", label: "Formam um triângulo equilátero na roda" },
          { value: "c", label: "Ficam próximas/adjacentes na roda de cores" },
          { value: "d", label: "Têm a mesma saturação e brilho" }
        ],
        correctAnswer: "c"
      },
      {
        id: "q8",
        type: "single-choice",
        title: "O que é temperatura de cor em design e fotografia?",
        description: "Selecione apenas uma alternativa.",
        points: 1,
        options: [
          { value: "a", label: "A medida de brilho em nits" },
          { value: "b", label: "A opacidade da cor em porcentagem" },
          { value: "c", label: "A percepção de uma cor como quente (vermelhos/amarelos) ou fria (azuis)" },
          { value: "d", label: "O número de bits necessários para representar a cor" }
        ],
        correctAnswer: "c"
      }
    ]
  }
];

const state = {
  user: null,
  isTeacher: false,
  profileSlug: "",
  customQuizzes: [],
  remoteAttemptsByQuiz: {},
  remoteAttemptsLoaded: false,
  selectedQuizId: null,
  activeQuestions: [],
  studentName: "",
  currentQuestionIndex: 0,
  answers: {},
  isActive: false,
  isCancelled: false,
  timedOutQuestionId: null,
  editingQuizId: null,
  violationCount: 0,
  isViolationGraceActive: false,
  violationTimeoutId: null,
  violationIntervalId: null,
  violationDeadline: 0
};

let pendingModalAction = null;

const authScreen = document.getElementById("auth-screen");
const homeScreen = document.getElementById("home-screen");
const teacherScreen = document.getElementById("teacher-screen");
const builderScreen = document.getElementById("builder-screen");
const userChip = document.getElementById("user-chip");
const homeHeaderButton = document.getElementById("home-header-button");
const teacherPanelButton = document.getElementById("teacher-panel-button");
const teacherBuilderButton = document.getElementById("teacher-builder-button");
const teacherRefreshButton = document.getElementById("teacher-refresh-button");
const teacherUsersList = document.getElementById("teacher-users-list");
const teacherMessage = document.getElementById("teacher-message");
const builderSubmitButton = document.getElementById("builder-submit-button");
const builderForm = document.getElementById("builder-form");
function getPendingUnloadKey() {
  return `quiz_pending_unload_cancellation_${state.user?.uid || "anon"}`;
}
const builderTitleInput = document.getElementById("builder-title");
const builderDescriptionInput = document.getElementById("builder-description");
const builderDurationInput = document.getElementById("builder-duration");
const builderQuestions = document.getElementById("builder-questions");
const builderAddQuestionButton = document.getElementById("builder-add-question-button");
const builderMessage = document.getElementById("builder-message");
const logoutButton = document.getElementById("logout-button");
const authGoogleBtn = document.getElementById("auth-google");
const authMessage = document.getElementById("auth-message");
const profileScreen = document.getElementById("profile-screen");
const profileForm = document.getElementById("profile-form");
const profileNameInput = document.getElementById("profile-name");
const profileMessage = document.getElementById("profile-message");

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  cancel: document.getElementById("cancel-screen"),
  result: document.getElementById("result-screen"),
  builder: document.getElementById("builder-screen")
};

const statsGrid = document.getElementById("stats-grid");
const quizGrid = document.getElementById("quiz-grid");
const quizSearch = document.getElementById("quiz-search");
const selectedQuizTitle = document.getElementById("selected-quiz-title");
const selectedQuizDescription = document.getElementById("selected-quiz-description");
const selectedQuizMeta = document.getElementById("selected-quiz-meta");
const startRulesList = document.getElementById("start-rules-list");
const startForm = document.getElementById("start-form");
const startQuizButton = document.getElementById("start-quiz-button");
const studentNameDisplay = document.getElementById("student-name-display");

const questionTitle = document.getElementById("question-title");
const questionDescription = document.getElementById("question-description");
const questionInfoArea = document.getElementById("question-info-area");
const questionForm = document.getElementById("question-form");
const progress = document.getElementById("progress");
const quizScreen = document.getElementById("quiz-screen");
const policyOverlay = document.getElementById("policy-overlay");
const policyCountdown = document.getElementById("policy-countdown");
const policyChancesText = document.getElementById("policy-chances-text");
const policyReturnButton = document.getElementById("policy-return-button");
const nextButton = document.getElementById("next-button");
const cancelButton = document.getElementById("cancel-button");
const cancelModal = document.getElementById("cancel-modal");
const cancelModalTitle = document.getElementById("cancel-modal-title");
const cancelModalText = document.getElementById("cancel-modal-text");
const cancelModalConfirm = document.getElementById("cancel-modal-confirm");
const cancelModalCancel = document.getElementById("cancel-modal-cancel");
const cancelMessage = document.getElementById("cancel-message");
const cancelBackHomeButton = document.getElementById("cancel-back-home-button");

const resultAlreadyCompleted = document.getElementById("result-already-completed");
const resultStudentName = document.getElementById("result-student-name");
const resultScore = document.getElementById("result-score");
const resultPercent = document.getElementById("result-percent");
const resultDetails = document.getElementById("result-details");
const captureButton = document.getElementById("capture-button");
const resultBackHomeButton = document.getElementById("result-back-home-button");

startForm.addEventListener("submit", handleStartQuiz);
nextButton.addEventListener("click", handleNextQuestion);
cancelButton.addEventListener("click", () => {
  openActionModal({
    title: "Cancelar questionário?",
    text: "Se você cancelar, não terá mais acesso a este quiz.",
    confirmLabel: "Sim, cancelar",
    onConfirm: () => cancelQuiz("Questionário cancelado manualmente.")
  });
});

if (cancelModalConfirm) {
  cancelModalConfirm.addEventListener("click", async () => {
    const action = pendingModalAction;
    hideCancelModal();
    if (typeof action === "function") {
      await action();
    }
  });
}
if (cancelModalCancel) {
  cancelModalCancel.addEventListener("click", () => {
    if (cancelModal) cancelModal.classList.add("hidden");
  });
}
policyReturnButton.addEventListener("click", handleReturnToQuiz);
captureButton.addEventListener("click", saveResultCapture);
resultBackHomeButton.addEventListener("click", showHome);
cancelBackHomeButton.addEventListener("click", showHome);
teacherRefreshButton.addEventListener("click", openTeacherPanel);
if (homeHeaderButton) {
  homeHeaderButton.addEventListener("click", () => {
    if (state.isActive && getSelectedQuiz()) {
      openActionModal({
        title: "Ir para a home?",
        text: "Ao voltar para a home, este questionário será cancelado e você perderá o acesso a ele.",
        confirmLabel: "Sim, ir para a home",
        onConfirm: () => {
          cancelQuiz("Questionário cancelado ao voltar para a home.", { skipScreen: true });
          showHome();
        }
      });
      return;
    }
    showHome();
  });
}
if (builderAddQuestionButton) {
  builderAddQuestionButton.addEventListener("click", () => addBuilderQuestionCard());
}

profileForm.addEventListener("submit", handleProfileSubmit);
if (builderForm) {
  builderForm.addEventListener("submit", handleBuilderCreateQuiz);
}

document.querySelectorAll("form").forEach((form) => {
  form.setAttribute("autocomplete", "off");
});
document.querySelectorAll("input, textarea, select").forEach((field) => {
  field.setAttribute("autocomplete", "off");
});

teacherPanelButton.addEventListener("click", async () => {
  if (!state.isTeacher) {
    alert("Acesso negado ao painel do professor.");
    return;
  }

  await openTeacherPanel();
});

if (teacherBuilderButton) {
  teacherBuilderButton.addEventListener("click", () => {
    if (!state.isTeacher) {
      alert("Acesso negado ao criador de quiz.");
      return;
    }
    openBuilderScreen();
  });
}

logoutButton.addEventListener("click", async () => {
  if (state.isActive && getSelectedQuiz()) {
    openActionModal({
      title: "Sair da plataforma?",
      text: "Ao sair agora, este questionário será cancelado e você perderá o acesso a ele.",
      confirmLabel: "Sim, sair",
      onConfirm: async () => {
        cancelQuiz("Questionário cancelado ao sair da plataforma.", { skipScreen: true });
        if (typeof window.firebaseSignOut === "function") {
          await window.firebaseSignOut();
        }
      }
    });
    return;
  }
  if (typeof window.firebaseSignOut === "function") {
    await window.firebaseSignOut();
  }
});

if (authGoogleBtn) {
  authGoogleBtn.addEventListener("click", async () => {
    authMessage.textContent = "";
    try {
      await window.firebaseSignInWithGoogle();
    } catch (error) {
      authMessage.textContent = "Não foi possível entrar com Google.";
      console.error(error);
    }
  });
}

quizSearch.addEventListener("input", renderHome);

document.addEventListener("visibilitychange", () => {
  if (state.isActive && document.visibilityState !== "visible") {
    handlePolicyViolation();
  }
});

window.addEventListener("blur", () => {
  setTimeout(() => {
    if (state.isActive && !document.hasFocus()) {
      handlePolicyViolation();
    }
  }, 0);
});

document.addEventListener("fullscreenchange", () => {
  if (state.isActive && !isFullscreenActive()) {
    handlePolicyViolation();
  }
});

window.addEventListener("beforeunload", (event) => {
  if (!state.isActive || !getSelectedQuiz()) {
    return;
  }

  persistUnloadCancellation();
  event.preventDefault();
  event.returnValue = "";
});

document.addEventListener("DOMContentLoaded", initializeAuth);

function initializeAuth() {
  if (typeof window.firebaseOnAuthStateChanged !== "function") {
    authMessage.textContent = "Erro ao carregar autenticação do Firebase.";
    return;
  }

  window.firebaseOnAuthStateChanged(async (user) => {
    state.user = user;
    if (user) {
      await ensureUserProfile();
      return;
    }

    showUnauthenticatedUI();
  });
}

function normalizeNameSlug(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/\s+/g, "-") || "usuario";
}

function savePendingUnloadCancellation(payload) {
  localStorage.setItem(getPendingUnloadKey(), JSON.stringify(payload));
}

function consumePendingUnloadCancellation() {
  const key = getPendingUnloadKey();
  const raw = localStorage.getItem(key);
  if (!raw) {
    return null;
  }

  localStorage.removeItem(key);
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function persistUnloadCancellation() {
  const quiz = getSelectedQuiz();
  if (!state.isActive || !quiz) {
    return;
  }

  const cancelAt = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const reason = "Questionário cancelado ao recarregar ou fechar a página.";

  saveStoredAttempt(quiz.id, {
    status: "cancelled",
    cancelReason: reason,
    blockedByViolation: false,
    at: cancelAt
  });

  savePendingUnloadCancellation({
    quizId: quiz.id,
    quizTitle: quiz.title,
    questionsLength: quiz.questions.length,
    reason,
    blockedByViolation: false,
    at: cancelAt
  });
}

function flushPendingUnloadCancellation() {
  const pending = consumePendingUnloadCancellation();
  if (!pending) {
    return;
  }

  const quiz = getAllQuizzes().find((item) => item.id === pending.quizId);
  const quizLike = quiz || {
    id: pending.quizId,
    title: pending.quizTitle || pending.quizId,
    questions: Array.from({ length: pending.questionsLength || 0 }, (_, index) => ({ id: `q${index + 1}` }))
  };

  saveCancelledAttemptToFirestore(quizLike, {
    reason: pending.reason,
    blockedByViolation: pending.blockedByViolation,
    at: pending.at
  });
}

function getAllQuizzes() {
  const customIds = new Set(state.customQuizzes.map((q) => q.id));
  const base = quizzes.filter((q) => !customIds.has(q.id));
  return [...base, ...state.customQuizzes];
}

function shuffleArray(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildShuffledQuestionSet(quiz) {
  const shuffledQuestions = quiz.questions.map((question, index) => ({
    ...question,
    id: question.id || `q${index + 1}`,
    options: shuffleArray((question.options || []).map((option) => ({ ...option })))
  }));

  return shuffleArray(shuffledQuestions);
}

function normalizeCustomQuiz(rawQuiz, docId) {
  if (!rawQuiz || !Array.isArray(rawQuiz.questions)) {
    return null;
  }

  const normalizedQuestions = rawQuiz.questions
    .map((question, index) => {
      const options = Array.isArray(question.options)
        ? question.options
          .map((option, optionIndex) => {
            if (typeof option === "string") {
              return { value: String.fromCharCode(97 + optionIndex), label: option };
            }
            if (!option || typeof option.label !== "string") {
              return null;
            }
            return {
              value: String(option.value || String.fromCharCode(97 + optionIndex)),
              label: option.label
            };
          })
          .filter(Boolean)
        : [];

      if (!question?.title || options.length < 2) {
        return null;
      }

      const correctAnswer = String(question.correctAnswer || "");
      if (!options.some((option) => option.value === correctAnswer)) {
        return null;
      }

      return {
        id: question.id || `q${index + 1}`,
        type: "single-choice",
        title: question.title,
        description: question.description || "Selecione apenas uma alternativa.",
        points: Number(question.points || 1),
        timer: Number(question.timer || 0),
        options,
        correctAnswer
      };
    })
    .filter(Boolean);

  if (!rawQuiz.title || normalizedQuestions.length === 0) {
    return null;
  }

  return {
    id: docId,
    title: rawQuiz.title,
    description: rawQuiz.description || "",
    duration: rawQuiz.duration || "10 min",
    questions: normalizedQuestions,
    isCustom: true
  };
}

async function refreshCustomQuizzes() {
  if (!window.firebaseDB || !window.firebaseCollection || !window.firebaseGetDocs) {
    state.customQuizzes = [];
    return;
  }

  try {
    const customRef = window.firebaseCollection(window.firebaseDB, "quizzes_custom");
    const snap = await window.firebaseGetDocs(customRef);
    const nextCustom = [];

    snap.forEach((docSnap) => {
      const data = docSnap.data();
      if (data?.ativo === false) {
        return;
      }
      const normalized = normalizeCustomQuiz(data, docSnap.id);
      if (normalized) {
        nextCustom.push(normalized);
      }
    });

    state.customQuizzes = nextCustom;
    renderHome();
  } catch (error) {
    console.error("Erro ao carregar quizzes customizados:", error);
  }
}

async function removeCustomQuiz(quizId) {
  if (!state.isTeacher) {
    alert("Apenas professores podem remover quizzes.");
    return;
  }

  const quiz = state.customQuizzes.find((item) => item.id === quizId);
  if (!quiz) {
    alert("Somente quizzes personalizados podem ser removidos.");
    return;
  }

  const ok = confirm(`Deseja remover o quiz '${quiz.title}'?`);
  if (!ok) {
    return;
  }

  const username = (state.studentName || state.user?.displayName || state.user?.email || "").trim();
  if (!username) {
    alert("Não foi possível validar o usuário atual para confirmar a exclusão.");
    return;
  }

  const typedUsername = prompt(`Para confirmar a exclusão, digite seu nome de usuário exatamente como está: ${username}`);
  if (typedUsername === null) {
    return;
  }

  if (typedUsername.trim() !== username) {
    alert("Nome de usuário incorreto. Exclusão cancelada.");
    return;
  }

  if (!window.firebaseDB || !window.firebaseDoc || (!window.firebaseDeleteDoc && !window.firebaseSetDoc)) {
    alert("Firebase indisponível para remover quiz.");
    return;
  }

  try {
    const quizRef = window.firebaseDoc(window.firebaseDB, "quizzes_custom", quizId);
    if (window.firebaseDeleteDoc) {
      await window.firebaseDeleteDoc(quizRef);
    } else {
      await window.firebaseSetDoc(quizRef, { ativo: false }, { merge: true });
    }
    await refreshCustomQuizzes();
  } catch (error) {
    console.error("Erro ao remover quiz:", error);
    alert("Não foi possível remover o quiz.");
  }
}

function getProfileStorageKey() {
  return `quiz_profile_${state.user?.uid || "anon"}`;
}

function showProfileScreen() {
  authScreen.classList.add("hidden");
  homeScreen.classList.add("hidden");
  profileScreen.classList.remove("hidden");
  userChip.classList.add("hidden");
  if (homeHeaderButton) {
    homeHeaderButton.classList.add("hidden");
  }
  logoutButton.classList.add("hidden");
  showOnlyScreen(null);
}

async function ensureUserProfile() {
  const cachedRaw = localStorage.getItem(getProfileStorageKey());
  if (cachedRaw) {
    const cached = JSON.parse(cachedRaw);
    state.studentName = cached.name;
    state.profileSlug = cached.slug;
    showAuthenticatedUI();
    return;
  }

  if (window.firebaseDoc && window.firebaseGetDoc && window.firebaseDB) {
    try {
      const indexRef = window.firebaseDoc(window.firebaseDB, "usuarios_index", state.user.uid);
      const indexSnap = await window.firebaseGetDoc(indexRef);
      if (indexSnap.exists()) {
        const data = indexSnap.data();
        state.studentName = data.nome || "";
        state.profileSlug = data.slug || normalizeNameSlug(data.nome || state.user.displayName || state.user.email || "usuario");
        localStorage.setItem(getProfileStorageKey(), JSON.stringify({
          name: state.studentName,
          slug: state.profileSlug
        }));
        showAuthenticatedUI();
        return;
      }
    } catch (error) {
      console.error("Erro ao carregar perfil:", error);
    }
  }

  showProfileScreen();
}

async function handleProfileSubmit(event) {
  event.preventDefault();
  profileMessage.textContent = "";

  const typedName = profileNameInput.value.trim();
  if (!typedName) {
    profileNameInput.focus();
    return;
  }

  const slug = normalizeNameSlug(typedName);
  state.studentName = typedName;
  state.profileSlug = slug;

  localStorage.setItem(getProfileStorageKey(), JSON.stringify({ name: typedName, slug }));

  if (window.firebaseDoc && window.firebaseSetDoc && window.firebaseDB && state.user) {
    try {
      const userFolderRef = window.firebaseDoc(window.firebaseDB, "usuarios", slug);
      const identityRef = window.firebaseDoc(window.firebaseDB, "usuarios", slug, "identidades", state.user.uid);
      const indexRef = window.firebaseDoc(window.firebaseDB, "usuarios_index", state.user.uid);

      await Promise.all([
        window.firebaseSetDoc(userFolderRef, {
          nome: typedName,
          slug,
          atualizadoEmIso: new Date().toISOString(),
          ultimoUid: state.user.uid
        }, { merge: true }),
        window.firebaseSetDoc(identityRef, {
          uid: state.user.uid,
          email: state.user.email || "",
          nome: typedName,
          criadoEmIso: new Date().toISOString()
        }, { merge: true }),
        window.firebaseSetDoc(indexRef, {
          uid: state.user.uid,
          nome: typedName,
          slug,
          email: state.user.email || "",
          atualizadoEmIso: new Date().toISOString()
        }, { merge: true })
      ]);
    } catch (error) {
      profileMessage.textContent = "Não foi possível salvar seu perfil agora.";
      console.error("Erro ao salvar perfil:", error);
      return;
    }
  }

  profileScreen.classList.add("hidden");
  showAuthenticatedUI();
}

function showAuthenticatedUI() {
  authScreen.classList.add("hidden");
  profileScreen.classList.add("hidden");
  teacherScreen.classList.add("hidden");
  if (builderScreen) {
    builderScreen.classList.add("hidden");
  }
  homeScreen.classList.remove("hidden");
  userChip.classList.remove("hidden");
  if (homeHeaderButton) {
    homeHeaderButton.classList.remove("hidden");
  }
  teacherPanelButton.classList.add("hidden");
  if (teacherBuilderButton) {
    teacherBuilderButton.classList.add("hidden");
  }
  logoutButton.classList.remove("hidden");

  const display = state.studentName || state.user.displayName || state.user.email || "Usuário";
  userChip.textContent = display;
  if (studentNameDisplay) {
    studentNameDisplay.textContent = state.studentName || "-";
  }

  showOnlyScreen(null);
  renderHome();
  flushPendingUnloadCancellation();
  refreshRemoteAttempts();
  refreshCustomQuizzes();
  refreshTeacherAccess();
}

function showUnauthenticatedUI() {
  state.isTeacher = false;
  state.studentName = "";
  state.profileSlug = "";
  state.remoteAttemptsByQuiz = {};
  state.remoteAttemptsLoaded = false;
  authScreen.classList.remove("hidden");
  profileScreen.classList.add("hidden");
  teacherScreen.classList.add("hidden");
  if (builderScreen) {
    builderScreen.classList.add("hidden");
  }
  homeScreen.classList.add("hidden");
  userChip.classList.add("hidden");
  if (homeHeaderButton) {
    homeHeaderButton.classList.add("hidden");
  }
  teacherPanelButton.classList.add("hidden");
  if (teacherBuilderButton) {
    teacherBuilderButton.classList.add("hidden");
  }
  logoutButton.classList.add("hidden");
  showOnlyScreen(null);
}

async function refreshTeacherAccess() {
  state.isTeacher = false;
  teacherPanelButton.classList.add("hidden");
  if (teacherBuilderButton) {
    teacherBuilderButton.classList.add("hidden");
  }

  if (!state.user?.email || !window.firebaseDoc || !window.firebaseGetDoc || !window.firebaseDB) {
    return;
  }

  const emailKey = state.user.email.trim().toLowerCase();

  try {
    const teacherRef = window.firebaseDoc(window.firebaseDB, "professores_permitidos", emailKey);
    const teacherSnap = await window.firebaseGetDoc(teacherRef);
    const allowed = teacherSnap.exists() && teacherSnap.data()?.ativo !== false;
    state.isTeacher = Boolean(allowed);

    if (state.isTeacher) {
      teacherPanelButton.classList.remove("hidden");
      if (teacherBuilderButton) {
        teacherBuilderButton.classList.remove("hidden");
      }
    }

    // Garante que os cards reflitam imediatamente permissões de professor
    renderHome();
  } catch (error) {
    console.error("Erro ao validar permissão de professor:", error);
  }
}

function parsePtBrDate(dateString) {
  if (!dateString || typeof dateString !== "string") {
    return 0;
  }
  const parts = dateString.split(" ");
  if (parts.length < 2) {
    return 0;
  }
  const dmy = parts[0].split("/");
  const hms = parts[1].split(":");
  if (dmy.length !== 3 || hms.length < 2) {
    return 0;
  }
  const day = Number(dmy[0]);
  const month = Number(dmy[1]) - 1;
  const year = Number(dmy[2]);
  const hour = Number(hms[0]);
  const minute = Number(hms[1]);
  const second = Number(hms[2] || 0);
  return new Date(year, month, day, hour, minute, second).getTime();
}

function getLatestAttemptsByQuiz(attempts) {
  const latestMap = {};
  attempts.forEach((attempt) => {
    const current = latestMap[attempt.quizId];
    if (!current) {
      latestMap[attempt.quizId] = attempt;
      return;
    }
    const currentTs = parsePtBrDate(current.data);
    const nextTs = parsePtBrDate(attempt.data);
    if (nextTs >= currentTs) {
      latestMap[attempt.quizId] = attempt;
    }
  });
  return Object.values(latestMap);
}

async function unlockQuizForStudent(slug, quizId) {
  if (!window.firebaseDB || !window.firebaseCollection || !window.firebaseQuery || !window.firebaseWhere || !window.firebaseGetDocs || !window.firebaseDeleteDoc || !window.firebaseDoc) {
    return false;
  }

  try {
    const attemptsRef = window.firebaseCollection(window.firebaseDB, "usuarios", slug, "tentativas");
    const q = window.firebaseQuery(attemptsRef, window.firebaseWhere("quizId", "==", quizId));
    const snap = await window.firebaseGetDocs(q);
    if (snap.empty) {
      return true;
    }

    const deletions = [];
    snap.forEach((docSnap) => {
      const ref = window.firebaseDoc(window.firebaseDB, "usuarios", slug, "tentativas", docSnap.id);
      deletions.push(window.firebaseDeleteDoc(ref));
    });
    await Promise.all(deletions);
    return true;
  } catch (error) {
    console.error("Erro ao desbloquear quiz:", error);
    return false;
  }
}

async function loadTeacherPanelData() {
  if (!window.firebaseDB || !window.firebaseCollection || !window.firebaseGetDocs) {
    teacherMessage.textContent = "Firestore indisponível no momento.";
    return;
  }

  teacherMessage.textContent = "Carregando dados...";
  teacherUsersList.innerHTML = "";

  try {
    const usersRef = window.firebaseCollection(window.firebaseDB, "usuarios");
    const usersSnap = await window.firebaseGetDocs(usersRef);

    if (usersSnap.empty) {
      teacherMessage.textContent = "Nenhum aluno encontrado.";
      return;
    }

    const cards = [];
    for (const userDoc of usersSnap.docs) {
      const userData = userDoc.data();
      const slug = userDoc.id;
      const attemptsRef = window.firebaseCollection(window.firebaseDB, "usuarios", slug, "tentativas");
      const attemptsSnap = await window.firebaseGetDocs(attemptsRef);

      const attempts = [];
      attemptsSnap.forEach((docSnap) => {
        attempts.push({ id: docSnap.id, ...docSnap.data() });
      });

      const latestAttempts = getLatestAttemptsByQuiz(attempts);

      const rowsHtml = latestAttempts.length
        ? latestAttempts.map((attempt) => `
            <tr>
              <td>${attempt.quizTitulo || attempt.quizId}</td>
              <td>${attempt.status === "cancelled" ? "-" : `${attempt.pontos ?? 0}/${attempt.total ?? 0}`}</td>
              <td>${attempt.status === "cancelled" ? "-" : `${attempt.percentual ?? 0}%`}</td>
              <td>${attempt.status === "cancelled"
            ? (attempt.bloqueadoPorViolacao ? "Bloqueado por violação" : "Cancelado")
            : "Concluído"}</td>
              <td>${attempt.data || "-"}</td>
              <td>
                <button class="btn btn-ghost teacher-unlock-btn" data-slug="${slug}" data-quizid="${attempt.quizId}">
                  Desbloquear
                </button>
              </td>
            </tr>
          `).join("")
        : `<tr><td colspan="6">Sem tentativas registradas.</td></tr>`;

      cards.push(`
        <article class="teacher-user-card">
          <h3>${userData.nome || slug}</h3>
          <p>${userData.email || "Sem e-mail"}</p>
          <div class="teacher-table-wrap">
            <table class="teacher-table">
              <thead>
                <tr>
                  <th>Quiz</th>
                  <th>Nota</th>
                  <th>%</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>${rowsHtml}</tbody>
            </table>
          </div>
        </article>
      `);
    }

    teacherUsersList.innerHTML = cards.join("");
    teacherMessage.textContent = "";

    teacherUsersList.querySelectorAll(".teacher-unlock-btn").forEach((button) => {
      button.addEventListener("click", async () => {
        const slug = button.dataset.slug;
        const quizId = button.dataset.quizid;
        if (!slug || !quizId) {
          return;
        }

        const ok = confirm(`Desbloquear o quiz '${quizId}' para este aluno?`);
        if (!ok) {
          return;
        }

        button.disabled = true;
        button.textContent = "Desbloqueando...";

        const unlocked = await unlockQuizForStudent(slug, quizId);
        if (unlocked) {
          button.textContent = "Desbloqueado";
          teacherMessage.textContent = "Quiz desbloqueado com sucesso.";
          await refreshRemoteAttempts();
        } else {
          button.disabled = false;
          button.textContent = "Desbloquear";
          teacherMessage.textContent = "Erro ao desbloquear quiz.";
        }
      });
    });
  } catch (error) {
    teacherMessage.textContent = "Erro ao carregar painel do professor.";
    console.error(error);
  }
}

async function openTeacherPanel() {
  if (!state.isTeacher) {
    alert("Acesso negado ao painel do professor.");
    return;
  }

  showOnlyScreen(null);
  homeScreen.classList.add("hidden");
  teacherScreen.classList.remove("hidden");
  await loadTeacherPanelData();
}

function getBuilderQuestionCards() {
  return builderQuestions ? Array.from(builderQuestions.querySelectorAll(".builder-question-card")) : [];
}

function addBuilderOptionRow(optionsEl, value = "", isCorrect = false) {
  const row = document.createElement("div");
  row.className = "builder-option-row";
  row.innerHTML = `
    <label>
      <input type="radio" name="" ${isCorrect ? "checked" : ""} /> Correta
    </label>
    <input type="text" placeholder="Texto da alternativa" value="${value.replace(/"/g, "&quot;")}" required />
    <button type="button" class="btn btn-ghost">Remover</button>
  `;

  const removeButton = row.querySelector("button");
  removeButton.addEventListener("click", () => {
    row.remove();
    updateBuilderRadioGroups();
  });

  optionsEl.appendChild(row);
  updateBuilderRadioGroups();
}

function updateBuilderRadioGroups() {
  getBuilderQuestionCards().forEach((card, cardIndex) => {
    const radios = card.querySelectorAll(".builder-option-row input[type='radio']");
    radios.forEach((radio) => {
      radio.name = `builder-correct-${cardIndex}`;
    });
  });
}

function addBuilderQuestionCard(seed = {}) {
  if (!builderQuestions) {
    return;
  }

  const card = document.createElement("article");
  card.className = "builder-question-card";
  card.innerHTML = `
    <div class="builder-question-head">
      <h4>Questão</h4>
      <button type="button" class="btn builder-remove-question">Remover questão</button>
    </div>
    <input type="text" class="builder-question-title" placeholder="Enunciado da questão" value="${(seed.title || "").replace(/"/g, "&quot;")}" required />
    <input type="text" class="builder-question-description" placeholder="Descrição (opcional)" value="${(seed.description || "").replace(/"/g, "&quot;")}" />
    <div class="builder-question-meta-grid">
      <label class="builder-field-label">
        Pontuação
        <input type="number" class="builder-question-points" min="1" value="${seed.points || 1}" />
      </label>
      <label class="builder-field-label">
        Tempo
        <select class="builder-question-timer">
          <option value="0" ${seed.timer === 0 || !seed.timer ? "selected" : ""}>Sem tempo</option>
          <option value="15" ${seed.timer === 15 ? "selected" : ""}>15 segundos</option>
          <option value="30" ${seed.timer === 30 ? "selected" : ""}>30 segundos</option>
          <option value="45" ${seed.timer === 45 ? "selected" : ""}>45 segundos</option>
          <option value="60" ${seed.timer === 60 ? "selected" : ""}>1 minuto</option>
          <option value="90" ${seed.timer === 90 ? "selected" : ""}>1 minuto e 30 segundos</option>
          <option value="120" ${seed.timer === 120 ? "selected" : ""}>2 minutos</option>
          <option value="180" ${seed.timer === 180 ? "selected" : ""}>3 minutos</option>
        </select>
      </label>
    </div>
    <div class="builder-options"></div>
    <button type="button" class="btn btn-ghost builder-add-option">Adicionar alternativa</button>
  `;

  const removeQuestionButton = card.querySelector(".builder-remove-question");
  removeQuestionButton.addEventListener("click", () => {
    card.remove();
    updateBuilderQuestionTitles();
    updateBuilderRadioGroups();
  });

  const optionsEl = card.querySelector(".builder-options");
  const addOptionButton = card.querySelector(".builder-add-option");
  addOptionButton.addEventListener("click", () => addBuilderOptionRow(optionsEl));

  const seedOptions = Array.isArray(seed.options) && seed.options.length >= 2
    ? seed.options
    : [{ label: "" }, { label: "" }];

  seedOptions.forEach((option) => addBuilderOptionRow(optionsEl, option.label || "", option.value === seed.correctAnswer));

  builderQuestions.appendChild(card);
  updateBuilderQuestionTitles();
  updateBuilderRadioGroups();
}

function updateBuilderQuestionTitles() {
  getBuilderQuestionCards().forEach((card, index) => {
    const title = card.querySelector(".builder-question-head h4");
    if (title) {
      title.textContent = `Questão ${index + 1}`;
    }
  });
}

function resetBuilderForm() {
  state.editingQuizId = null;
  if (builderForm) {
    builderForm.reset();
  }
  if (builderQuestions) {
    builderQuestions.innerHTML = "";
  }
  if (builderSubmitButton) {
    builderSubmitButton.textContent = "Publicar quiz";
  }
  addBuilderQuestionCard();
}

function startEditingQuiz(quizId) {
  const quiz = getAllQuizzes().find((item) => item.id === quizId);
  if (!quiz || !builderQuestions) {
    return;
  }

  state.editingQuizId = quiz.id;
  openBuilderScreen(false);
  builderTitleInput.value = quiz.title || "";
  builderDescriptionInput.value = quiz.description || "";
  builderDurationInput.value = quiz.duration || "8 min";
  builderQuestions.innerHTML = "";
  (quiz.questions || []).forEach((question) => addBuilderQuestionCard(question));
  if (builderSubmitButton) {
    builderSubmitButton.textContent = "Salvar alteracoes";
  }
  if (builderMessage) {
    builderMessage.textContent = "Editando quiz existente.";
  }
}

function buildQuestionsFromBuilder() {
  const questions = [];

  for (const card of getBuilderQuestionCards()) {
    const title = card.querySelector(".builder-question-title")?.value.trim() || "";
    const description = card.querySelector(".builder-question-description")?.value.trim() || "";
    const points = Number(card.querySelector(".builder-question-points")?.value || 1);
    const optionRows = Array.from(card.querySelectorAll(".builder-option-row"));
    const timer = Number(card.querySelector(".builder-question-timer")?.value || 0);

    if (!title || optionRows.length < 2) {
      return { error: "Cada questão precisa de enunciado e pelo menos 2 alternativas." };
    }

    const options = [];
    let correctAnswer = "";

    optionRows.forEach((row, index) => {
      const label = row.querySelector("input[type='text']")?.value.trim() || "";
      const isCorrect = row.querySelector("input[type='radio']")?.checked;
      const value = String.fromCharCode(97 + index);

      if (label) {
        options.push({ value, label });
        if (isCorrect) {
          correctAnswer = value;
        }
      }
    });

    if (options.length < 2 || !correctAnswer) {
      return { error: "Cada questão precisa de pelo menos 2 alternativas preenchidas e uma correta marcada." };
    }

    questions.push({
      id: `q${questions.length + 1}`,
      type: "single-choice",
      title,
      description: description || "Selecione apenas uma alternativa.",
      points: Number.isFinite(points) && points > 0 ? points : 1,
      options,
      correctAnswer,
      timer: Number.isFinite(timer) && timer > 0 ? timer : 0
    });
  }

  if (questions.length === 0) {
    return { error: "Adicione ao menos uma questão." };
  }

  return { questions };
}

function openBuilderScreen(shouldReset = true) {
  showOnlyScreen("builder");
  if (teacherScreen) {
    teacherScreen.classList.add("hidden");
  }
  if (homeScreen) {
    homeScreen.classList.add("hidden");
  }
  if (builderMessage) {
    builderMessage.textContent = "";
  }
  if (shouldReset) {
    resetBuilderForm();
  }
}

async function handleBuilderCreateQuiz(event) {
  event.preventDefault();

  if (!state.isTeacher) {
    return;
  }

  if (!window.firebaseDB || !window.firebaseSetDoc || !window.firebaseDoc) {
    if (builderMessage) {
      builderMessage.textContent = "Firebase indisponível para criar quiz.";
    }
    return;
  }

  const title = builderTitleInput?.value.trim() || "";
  const description = builderDescriptionInput?.value.trim() || "";
  const duration = builderDurationInput?.value.trim() || "10 min";

  if (!title || !description) {
    if (builderMessage) {
      builderMessage.textContent = "Preencha título e descrição.";
    }
    return;
  }

  const built = buildQuestionsFromBuilder();
  if (built.error) {
    if (builderMessage) {
      builderMessage.textContent = built.error;
    }
    return;
  }

  const slugBase = normalizeNameSlug(title);
  const quizId = state.editingQuizId || `custom-${slugBase}-${Date.now()}`;
  const payload = {
    title,
    description,
    duration,
    questions: built.questions,
    ativo: true,
    criadoPorUid: state.user?.uid || "",
    criadoPorEmail: state.user?.email || "",
    criadoEmIso: new Date().toISOString(),
    atualizadoEmIso: new Date().toISOString()
  };

  if (builderMessage) {
    builderMessage.textContent = state.editingQuizId ? "Salvando alteracoes..." : "Publicando quiz...";
  }

  try {
    const quizRef = window.firebaseDoc(window.firebaseDB, "quizzes_custom", quizId);
    await window.firebaseSetDoc(quizRef, payload);
    if (builderMessage) {
      builderMessage.textContent = state.editingQuizId ? "Quiz atualizado com sucesso." : "Quiz publicado com sucesso.";
    }
    await refreshCustomQuizzes();
    resetBuilderForm();
  } catch (error) {
    if (builderMessage) {
      builderMessage.textContent = state.editingQuizId ? "Erro ao atualizar quiz." : "Erro ao publicar quiz.";
    }
    console.error("Erro ao criar quiz customizado:", error);
  }
}

function getSelectedQuiz() {
  return getAllQuizzes().find((quiz) => quiz.id === state.selectedQuizId) || null;
}

function getStorageKey(quizId) {
  const uid = state.user?.uid || "anon";
  return `quiz_attempt_${uid}_${quizId}`;
}

function getStoredAttempt(quizId) {
  const raw = localStorage.getItem(getStorageKey(quizId));
  return raw ? JSON.parse(raw) : null;
}

function getKnownAttempt(quizId) {
  if (state.remoteAttemptsLoaded) {
    return state.remoteAttemptsByQuiz[quizId] || null;
  }

  return getStoredAttempt(quizId) || null;
}

function saveStoredAttempt(quizId, payload) {
  localStorage.setItem(getStorageKey(quizId), JSON.stringify(payload));
}

async function refreshRemoteAttempts() {
  if (!window.firebaseDB || !window.firebaseCollection || !window.firebaseGetDocs || !state.profileSlug) {
    return;
  }

  try {
    const attemptsRef = window.firebaseCollection(window.firebaseDB, "usuarios", state.profileSlug, "tentativas");
    const snap = await window.firebaseGetDocs(attemptsRef);
    const nextMap = {};

    snap.forEach((docSnap) => {
      const data = docSnap.data();
      if (!data?.quizId) {
        return;
      }

      nextMap[data.quizId] = {
        status: data.status || "completed",
        cancelReason: data.motivoCancelamento || "",
        blockedByViolation: Boolean(data.bloqueadoPorViolacao),
        result: {
          quizId: data.quizId,
          quizTitle: data.quizTitulo,
          studentName: data.nome,
          earnedPoints: data.pontos ?? 0,
          maxPoints: data.total ?? 0,
          percent: data.percentual ?? 0,
          date: data.data
        },
        answers: data.respostas || {}
      };
    });

    state.remoteAttemptsByQuiz = nextMap;
    state.remoteAttemptsLoaded = true;

    getAllQuizzes().forEach((quiz) => {
      const storageKey = getStorageKey(quiz.id);
      if (nextMap[quiz.id]) {
        localStorage.setItem(storageKey, JSON.stringify(nextMap[quiz.id]));
      } else {
        localStorage.removeItem(storageKey);
      }
    });

    renderHome();
  } catch (error) {
    console.error("Erro ao carregar tentativas remotas:", error);
  }
}

function renderHome() {
  const allQuizzes = getAllQuizzes();
  const filterText = quizSearch.value.trim().toLowerCase();
  const list = allQuizzes.filter((quiz) => {
    const data = `${quiz.title} ${quiz.description}`.toLowerCase();
    return data.includes(filterText);
  });

  const total = allQuizzes.length;
  const completed = allQuizzes.filter((quiz) => getKnownAttempt(quiz.id)?.status === "completed").length;
  const cancelled = allQuizzes.filter((quiz) => getKnownAttempt(quiz.id)?.status === "cancelled").length;
  const available = total - completed - cancelled;

  statsGrid.innerHTML = `
    <article class="stat-card"><h3>${total}</h3><p>Total de quizzes</p></article>
    <article class="stat-card"><h3>${completed}</h3><p>Concluídos</p></article>
    <article class="stat-card"><h3>${cancelled}</h3><p>Cancelados</p></article>
    <article class="stat-card"><h3>${available}</h3><p>Disponíveis</p></article>
  `;

  if (list.length === 0) {
    quizGrid.innerHTML = `<article class="card"><p>Nenhum quiz encontrado.</p></article>`;
    return;
  }

  quizGrid.innerHTML = "";
  list.forEach((quiz) => {
    const attempt = getKnownAttempt(quiz.id);
    const status = attempt?.status || "available";
    const statusLabel =
      status === "completed" ? "Concluído" :
        status === "cancelled" ? "Cancelado" :
          "Disponível";

    const card = document.createElement("article");
    card.className = "card quiz-card";
    card.innerHTML = `
      <div class="quiz-card-head">
        <h3>${quiz.title}</h3>
        <span class="quiz-status ${status}">${statusLabel}</span>
      </div>
      <p>${quiz.description}</p>
      <ul class="quiz-meta">
        <li>Duração: ${quiz.duration}</li>
        <li>Questões: ${quiz.questions.length}</li>
      </ul>
      <div class="quiz-card-actions">
        <button class="btn btn-primary" data-quiz="${quiz.id}">
          ${attempt ? "Ver detalhes" : "Abrir quiz"}
        </button>
        ${state.isTeacher ? `<button class="btn btn-ghost" data-edit-quiz="${quiz.id}">Editar quiz</button>` : ""}
        ${state.isTeacher && quiz.isCustom ? `<button class="btn btn-danger-soft" data-remove-quiz="${quiz.id}">Remover quiz</button>` : ""}
      </div>
    `;

    const button = card.querySelector("button[data-quiz]");
    button.addEventListener("click", async () => {
      await openQuiz(quiz.id);
    });

    const editButton = card.querySelector("button[data-edit-quiz]");
    if (editButton) {
      editButton.addEventListener("click", () => {
        startEditingQuiz(quiz.id);
      });
    }

    const removeButton = card.querySelector("button[data-remove-quiz]");
    if (removeButton) {
      removeButton.addEventListener("click", async () => {
        await removeCustomQuiz(quiz.id);
      });
    }

    quizGrid.appendChild(card);
  });
}

async function getRemoteAttemptForQuiz(quizId) {
  if (!window.firebaseDB || !window.firebaseCollection || !window.firebaseQuery || !window.firebaseWhere || !window.firebaseLimit || !window.firebaseGetDocs) {
    return null;
  }

  if (!state.profileSlug) {
    return null;
  }

  try {
    const attemptsRef = window.firebaseCollection(window.firebaseDB, "usuarios", state.profileSlug, "tentativas");
    const q = window.firebaseQuery(
      attemptsRef,
      window.firebaseWhere("quizId", "==", quizId),
      window.firebaseLimit(1)
    );
    const snap = await window.firebaseGetDocs(q);

    if (snap.empty) {
      return null;
    }

    const data = snap.docs[0].data();
    return {
      status: data.status || "completed",
      cancelReason: data.motivoCancelamento || "",
      blockedByViolation: Boolean(data.bloqueadoPorViolacao),
      result: {
        quizId: data.quizId,
        quizTitle: data.quizTitulo,
        studentName: data.nome,
        earnedPoints: data.pontos ?? 0,
        maxPoints: data.total ?? 0,
        percent: data.percentual ?? 0,
        date: data.data
      },
      answers: data.respostas || {}
    };
  } catch (error) {
    console.error("Erro ao consultar tentativa no Firestore:", error);
    return null;
  }
}

async function openQuiz(quizId) {
  state.selectedQuizId = quizId;
  const quiz = getSelectedQuiz();
  let attempt = getKnownAttempt(quizId);

  if (!attempt) {
    const remoteAttempt = await getRemoteAttemptForQuiz(quizId);
    if (remoteAttempt) {
      attempt = remoteAttempt;
      saveStoredAttempt(quizId, remoteAttempt);
    }
  }

  if (!quiz) {
    return;
  }

  if (attempt?.status === "completed") {
    resultAlreadyCompleted.classList.remove("hidden");
    showResult(attempt.result, "Você já realizou este questionário. Este é seu resultado anterior.");
    return;
  }

  if (attempt?.status === "cancelled") {
    cancelMessage.textContent = attempt.cancelReason || "Questionário cancelado por violação de regras.";
    showOnlyScreen("cancel");
    return;
  }

  selectedQuizTitle.textContent = quiz.title;
  selectedQuizDescription.textContent = quiz.description;
  if (studentNameDisplay) {
    studentNameDisplay.textContent = state.studentName || "-";
  }
  selectedQuizMeta.innerHTML = `
    <li>Duração estimada: ${quiz.duration}</li>
    <li>Total de questões: ${quiz.questions.length}</li>
  `;

  const hasTimedQuestion = quiz.questions.some((question) => Number(question.timer || 0) > 0);
  if (startRulesList) {
    startRulesList.innerHTML = `
      <li>Não é possível voltar para questões anteriores.</li>
      <li>As questões e alternativas são embaralhadas.</li>
      <li>${hasTimedQuestion ? "Este quiz possui questões com tempo limite." : "Este quiz não possui tempo por questão."}</li>
      <li>Não recarregue a página e não troque de tela; isso cancela a avaliação.</li>
      <li>Ao cancelar o quiz, você perde o acesso à tentativa.</li>
    `;
  }

  showOnlyScreen("start");
}

function showHome() {
  clearSessionState();
  showOnlyScreen(null);
  teacherScreen.classList.add("hidden");
  if (builderScreen) {
    builderScreen.classList.add("hidden");
  }
  homeScreen.classList.remove("hidden");
  resultAlreadyCompleted.classList.add("hidden");
  renderHome();
}

function showOnlyScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.add("hidden"));

  if (screenName) {
    homeScreen.classList.add("hidden");
    teacherScreen.classList.add("hidden");
  } else if (state.user) {
    homeScreen.classList.remove("hidden");
  }

  if (screenName && screens[screenName]) {
    screens[screenName].classList.remove("hidden");
  }
}

function clearSessionState() {
  state.currentQuestionIndex = 0;
  state.activeQuestions = [];
  state.answers = {};
  state.isActive = false;
  state.isCancelled = false;
  state.timedOutQuestionId = null;
  state.violationCount = 0;
  state.isViolationGraceActive = false;
  clearQuestionTimerState();
  clearViolationTimers();
  hidePolicyWarning();
  hideCancelModal();
}

function hideCancelModal() {
  pendingModalAction = null;
  if (cancelModal) {
    cancelModal.classList.add("hidden");
  }
}

function openActionModal({ title, text, confirmLabel, onConfirm }) {
  if (!cancelModal || !cancelModalTitle || !cancelModalText || !cancelModalConfirm) {
    if (typeof onConfirm === "function") {
      onConfirm();
    }
    return;
  }

  cancelModalTitle.textContent = title;
  cancelModalText.textContent = text;
  cancelModalConfirm.textContent = confirmLabel;
  pendingModalAction = onConfirm;
  cancelModal.classList.remove("hidden");
}

function updateNextButtonVisibility() {
  if (!nextButton) {
    return;
  }

  const selected = questionForm?.querySelector("input[type='radio']:checked");
  const shouldShow = Boolean(selected) && !state.timedOutQuestionId;
  nextButton.classList.toggle("hidden", !shouldShow);
}

function clearQuestionTimerState() {
  if (window.questionTimerInterval) {
    clearInterval(window.questionTimerInterval);
    window.questionTimerInterval = null;
  }
  if (questionInfoArea) {
    questionInfoArea.innerHTML = "";
  }
  if (questionForm) {
    questionForm.classList.remove("question-timeout-locked");
  }
  nextButton.disabled = false;
}

function advanceQuestion(options = {}) {
  const quiz = getSelectedQuiz();
  if (!quiz) {
    return;
  }

  const activeQuestions = state.activeQuestions.length ? state.activeQuestions : quiz.questions;
  const question = activeQuestions[state.currentQuestionIndex];
  if (!question) {
    finishQuiz();
    return;
  }

  const selected = questionForm.querySelector(`input[name="${question.id}"]:checked`);
  if (!options.allowBlank && !selected) {
    showValidationMessage("Selecione uma resposta para continuar.");
    return;
  }

  clearValidationMessage();
  if (selected) {
    state.answers[question.id] = selected.value;
  }
  state.timedOutQuestionId = null;
  state.currentQuestionIndex += 1;

  if (state.currentQuestionIndex >= activeQuestions.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

function handleQuestionTimerExpired(question) {
  state.timedOutQuestionId = question.id;
  clearQuestionTimerState();
  clearValidationMessage();

  const selected = questionForm.querySelector(`input[name="${question.id}"]:checked`);
  const hasSelectedAnswer = Boolean(selected);
  if (selected) {
    state.answers[question.id] = selected.value;
  }

  Array.from(questionForm.querySelectorAll("input")).forEach((input) => {
    input.disabled = true;
  });

  questionForm.classList.add("question-timeout-locked");

  nextButton.disabled = true;
  nextButton.classList.add("hidden");

  if (!questionInfoArea) {
    advanceQuestion({ allowBlank: true });
    return;
  }

  const notice = document.createElement("div");
  notice.className = "question-timeout-notice";
  notice.innerHTML = `
    <p>${hasSelectedAnswer ? "O tempo desta questão acabou. Sua resposta foi registrada." : "O tempo desta questão acabou. Sua resposta não foi registrada."}</p>
    <button type="button" class="btn btn-primary" id="question-timeout-next">Ir para a próxima questão</button>
  `;
  questionInfoArea.innerHTML = "";
  questionInfoArea.appendChild(notice);

  const timeoutButton = document.getElementById("question-timeout-next");
  if (timeoutButton) {
    timeoutButton.addEventListener("click", () => {
      advanceQuestion({ allowBlank: true });
    });
  }
}

function renderQuestionTimer(question) {
  clearQuestionTimerState();

  if (!questionInfoArea || !question.timer || question.timer <= 0) {
    return;
  }

  let timeLeft = question.timer;
  const timerBox = document.createElement("div");
  timerBox.className = "question-timer";
  timerBox.innerHTML = `<span>Tempo restante</span><strong>${timeLeft}s</strong>`;
  questionInfoArea.appendChild(timerBox);

  window.questionTimerInterval = setInterval(() => {
    timeLeft -= 1;
    const strong = timerBox.querySelector("strong");
    if (strong) {
      strong.textContent = `${Math.max(0, timeLeft)}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(window.questionTimerInterval);
      window.questionTimerInterval = null;
      handleQuestionTimerExpired(question);
    }
  }, 1000);
}

async function handleStartQuiz(event) {
  event.preventDefault();
  const quiz = getSelectedQuiz();
  if (!quiz) {
    return;
  }

  if (!state.studentName) {
    alert("Complete seu perfil antes de iniciar o quiz.");
    return;
  }

  const enteredFullscreen = await requestFullscreenMode();
  if (!enteredFullscreen) {
    alert("É obrigatório permanecer em tela cheia para realizar o questionário.");
    return;
  }

  clearSessionState();
  state.activeQuestions = buildShuffledQuestionSet(quiz);
  state.isActive = true;

  showOnlyScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const quiz = getSelectedQuiz();
  if (!quiz) {
    return;
  }

  const activeQuestions = state.activeQuestions.length ? state.activeQuestions : quiz.questions;
  const question = activeQuestions[state.currentQuestionIndex];
  if (!question) {
    finishQuiz();
    return;
  }

  progress.textContent = `Questão ${state.currentQuestionIndex + 1} de ${activeQuestions.length}`;
  questionTitle.textContent = question.title;
  questionDescription.textContent = question.description || "";
  questionForm.innerHTML = "";
  renderQuestionTimer(question);

  questionForm.classList.add("masked");
  question.options.forEach((option) => {
    const id = `${question.id}-${option.value}`;
    const label = document.createElement("label");
    label.className = "answer-option";
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.id = id;
    input.value = option.value;
    input.required = true;
    input.checked = state.answers[question.id] === option.value;
    input.addEventListener("change", updateNextButtonVisibility);

    const text = document.createElement("span");
    text.textContent = option.label;
    text.dataset.label = option.label;

    label.appendChild(input);
    label.appendChild(text);
    questionForm.appendChild(label);
  });

  updateNextButtonVisibility();

  // Adiciona listener para efeito de "máscara circular"
  if (!questionForm._maskHandler) {
    questionForm._maskHandler = function (e) {
      const hoveredOption = e.target.closest(".answer-option");

      Array.from(questionForm.children).forEach((el) => {
        const textEl = el.querySelector("span");
        if (!textEl) {
          return;
        }

        if (el !== hoveredOption) {
          textEl.style.setProperty("--reveal-x", "-9999px");
          textEl.style.setProperty("--reveal-y", "-9999px");
          return;
        }

        const elRect = el.getBoundingClientRect();
        const localX = e.clientX - elRect.left;
        const localY = e.clientY - elRect.top;
        textEl.style.setProperty("--reveal-x", `${localX}px`);
        textEl.style.setProperty("--reveal-y", `${localY}px`);
      });
    };
    questionForm.addEventListener("mousemove", questionForm._maskHandler);
    questionForm.addEventListener("mouseleave", function () {
      Array.from(questionForm.children).forEach((el) => {
        const textEl = el.querySelector("span");
        if (textEl) {
          textEl.style.setProperty("--reveal-x", "-9999px");
          textEl.style.setProperty("--reveal-y", "-9999px");
        }
      });
    });
  }
  // fim renderQuestion
}

function handleNextQuestion() {
  advanceQuestion();
}

function evaluateQuiz(quiz) {
  let earnedPoints = 0;
  let maxPoints = 0;
  const activeQuestions = state.activeQuestions.length ? state.activeQuestions : quiz.questions;

  activeQuestions.forEach((question) => {
    const points = question.points || 1;
    maxPoints += points;
    if (state.answers[question.id] === question.correctAnswer) {
      earnedPoints += points;
    }
  });

  const percent = maxPoints > 0 ? Math.round((earnedPoints / maxPoints) * 100) : 0;
  return { earnedPoints, maxPoints, percent };
}

function finishQuiz() {
  const quiz = getSelectedQuiz();
  if (!quiz) {
    return;
  }

  state.isActive = false;
  state.timedOutQuestionId = null;
  state.isViolationGraceActive = false;
  clearQuestionTimerState();
  clearViolationTimers();
  hidePolicyWarning();

  const { earnedPoints, maxPoints, percent } = evaluateQuiz(quiz);
  const result = {
    quizId: quiz.id,
    quizTitle: quiz.title,
    studentName: state.studentName,
    earnedPoints,
    maxPoints,
    percent,
    date: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
  };

  saveStoredAttempt(quiz.id, {
    status: "completed",
    result,
    answers: state.answers
  });

  saveAttemptToFirestore(quiz, result, state.answers);
  showResult(result, "Tire uma captura desta tela e envie conforme orientação do professor.");
}

function showResult(result, detailsText) {
  resultStudentName.textContent = result.studentName;
  resultScore.textContent = `${result.earnedPoints} / ${result.maxPoints}`;
  resultPercent.textContent = `${result.percent}% de acertos`;
  resultDetails.textContent = detailsText;
  showOnlyScreen("result");
}

function cancelQuiz(reason, options = {}) {
  const quiz = getSelectedQuiz();
  if (!quiz) {
    return;
  }

  const blockedByViolation = Boolean(options.blockedByViolation);
  const cancelAt = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  state.isActive = false;
  state.isCancelled = true;
  state.timedOutQuestionId = null;
  state.isViolationGraceActive = false;
  clearQuestionTimerState();
  clearViolationTimers();
  hidePolicyWarning();
  hideCancelModal();

  saveStoredAttempt(quiz.id, {
    status: "cancelled",
    cancelReason: reason,
    blockedByViolation,
    at: cancelAt
  });

  saveCancelledAttemptToFirestore(quiz, {
    reason,
    blockedByViolation,
    at: cancelAt
  });

  if (options.skipScreen) {
    return;
  }

  cancelMessage.textContent = reason;
  showOnlyScreen("cancel");
}

function saveCancelledAttemptToFirestore(quiz, cancellation) {
  if (!window.firebaseDB || !window.firebaseSetDoc || !window.firebaseDoc) {
    return;
  }

  const uid = state.user?.uid || "anon";
  const slug = state.profileSlug || normalizeNameSlug(state.studentName || state.user?.displayName || "usuario");
  const safeQuizId = quiz.id.replace(/[^a-z0-9-_]/gi, "_");
  const timestamp = new Date().toISOString().replace(/[.:]/g, "-");
  const attemptId = `${safeQuizId}_${timestamp}`;

  const userRef = window.firebaseDoc(window.firebaseDB, "usuarios", slug);
  const attemptRef = window.firebaseDoc(window.firebaseDB, "usuarios", slug, "tentativas", attemptId);
  const indexRef = window.firebaseDoc(window.firebaseDB, "usuarios_index", uid);

  const userPayload = {
    uid,
    nome: state.studentName || "",
    slug,
    email: state.user?.email || "",
    ultimaAtividade: cancellation.at,
    atualizadoEmIso: new Date().toISOString()
  };

  const attemptPayload = {
    uid,
    quizId: quiz.id,
    quizTitulo: quiz.title,
    nome: state.studentName || "",
    pontos: 0,
    total: quiz.questions.length,
    percentual: 0,
    data: cancellation.at,
    status: "cancelled",
    bloqueadoPorViolacao: Boolean(cancellation.blockedByViolation),
    motivoCancelamento: cancellation.reason,
    respostas: state.answers
  };

  Promise.all([
    window.firebaseSetDoc(userRef, userPayload, { merge: true }),
    window.firebaseSetDoc(attemptRef, attemptPayload),
    window.firebaseSetDoc(indexRef, {
      uid,
      nome: state.studentName || "",
      slug,
      email: state.user?.email || "",
      atualizadoEmIso: new Date().toISOString()
    }, { merge: true })
  ]).then(() => {
    state.remoteAttemptsByQuiz[quiz.id] = {
      status: "cancelled",
      cancelReason: cancellation.reason,
      blockedByViolation: Boolean(cancellation.blockedByViolation),
      result: {
        quizId: quiz.id,
        quizTitle: quiz.title,
        studentName: state.studentName || "",
        earnedPoints: 0,
        maxPoints: quiz.questions.length,
        percent: 0,
        date: cancellation.at
      },
      answers: state.answers
    };
    state.remoteAttemptsLoaded = true;
    renderHome();
  }).catch((error) => {
    console.error("Erro ao salvar cancelamento no Firestore:", error);
  });
}

function saveAttemptToFirestore(quiz, result, answers) {
  if (!window.firebaseDB || !window.firebaseSetDoc || !window.firebaseDoc) {
    return;
  }

  const uid = state.user?.uid || "anon";
  const slug = state.profileSlug || normalizeNameSlug(state.studentName || state.user?.displayName || "usuario");
  const safeQuizId = quiz.id.replace(/[^a-z0-9-_]/gi, "_");
  const timestamp = new Date().toISOString().replace(/[.:]/g, "-");
  const attemptId = `${safeQuizId}_${timestamp}`;

  // Estrutura organizada por nome escolhido:
  // usuarios/{nomeSlug}
  // usuarios/{nomeSlug}/tentativas/{attemptId}
  const userRef = window.firebaseDoc(window.firebaseDB, "usuarios", slug);
  const attemptRef = window.firebaseDoc(window.firebaseDB, "usuarios", slug, "tentativas", attemptId);
  const indexRef = window.firebaseDoc(window.firebaseDB, "usuarios_index", uid);

  const userPayload = {
    uid,
    nome: state.studentName || result.studentName || "",
    slug,
    email: state.user?.email || "",
    ultimaAtividade: result.date,
    atualizadoEmIso: new Date().toISOString()
  };

  const attemptPayload = {
    uid,
    quizId: quiz.id,
    quizTitulo: quiz.title,
    nome: result.studentName,
    pontos: result.earnedPoints,
    total: result.maxPoints,
    percentual: result.percent,
    data: result.date,
    status: "completed",
    bloqueadoPorViolacao: false,
    motivoCancelamento: "",
    respostas: answers
  };

  Promise.all([
    window.firebaseSetDoc(userRef, userPayload, { merge: true }),
    window.firebaseSetDoc(attemptRef, attemptPayload),
    window.firebaseSetDoc(indexRef, {
      uid,
      nome: state.studentName || result.studentName || "",
      slug,
      email: state.user?.email || "",
      atualizadoEmIso: new Date().toISOString()
    }, { merge: true })
  ]).catch((error) => {
    console.error("Erro ao salvar no Firestore:", error);
  });
}

function isFullscreenActive() {
  return Boolean(document.fullscreenElement);
}

function handlePolicyViolation() {
  if (!state.isActive || state.isViolationGraceActive) {
    return;
  }

  if (state.violationCount >= 2) {
    cancelQuiz("Questionário cancelado após múltiplas violações das regras.", { blockedByViolation: true });
    return;
  }

  state.violationCount += 1;
  state.isViolationGraceActive = true;
  state.violationDeadline = Date.now() + 10000;

  showPolicyWarning();
  clearViolationTimers();
  updatePolicyCountdown();
  state.violationIntervalId = setInterval(updatePolicyCountdown, 100);
  state.violationTimeoutId = setTimeout(() => {
    if (state.isActive && state.isViolationGraceActive) {
      cancelQuiz("Questionário cancelado porque você não retornou em até 10 segundos.", { blockedByViolation: true });
    }
  }, 10000);
}

async function handleReturnToQuiz() {
  if (!state.isActive) {
    return;
  }

  if (!isFullscreenActive()) {
    const entered = await requestFullscreenMode();
    if (!entered) {
      return;
    }
  }

  state.isViolationGraceActive = false;
  state.violationDeadline = 0;
  clearViolationTimers();
  hidePolicyWarning();
}

function clearViolationTimers() {
  if (state.violationTimeoutId) {
    clearTimeout(state.violationTimeoutId);
    state.violationTimeoutId = null;
  }

  if (state.violationIntervalId) {
    clearInterval(state.violationIntervalId);
    state.violationIntervalId = null;
  }
}

function showPolicyWarning() {
  if (!policyOverlay || !policyChancesText) {
    return;
  }

  const changesMessage = state.violationCount === 1
    ? "Não abra mais. Esta é sua 1a de 2 chances."
    : "Não abra mais. Esta é sua ultima chance.";

  policyChancesText.textContent = changesMessage;
  quizScreen.classList.add("quiz-locked");
  policyOverlay.classList.remove("hidden");
}

function hidePolicyWarning() {
  if (!policyOverlay || !policyChancesText) {
    return;
  }

  policyCountdown.textContent = "10";
  policyChancesText.textContent = "";
  quizScreen.classList.remove("quiz-locked");
  policyOverlay.classList.add("hidden");
}

function updatePolicyCountdown() {
  if (!state.isViolationGraceActive || !state.violationDeadline) {
    return;
  }

  const remainingMs = Math.max(0, state.violationDeadline - Date.now());
  policyCountdown.textContent = String(Math.ceil(remainingMs / 1000));

  if (remainingMs === 0 && state.isViolationGraceActive) {
    cancelQuiz("Questionário cancelado porque você não retornou em até 10 segundos.", { blockedByViolation: true });
  }
}

async function requestFullscreenMode() {
  if (isFullscreenActive()) {
    return true;
  }

  if (!document.documentElement.requestFullscreen) {
    return false;
  }

  try {
    await document.documentElement.requestFullscreen();
    return isFullscreenActive();
  } catch (error) {
    console.error(error);
    return false;
  }
}

function showValidationMessage(message) {
  clearValidationMessage();
  const warning = document.createElement("p");
  warning.id = "question-validation-message";
  warning.textContent = message;
  warning.style.color = "#b42318";
  warning.style.margin = "8px 0 0";
  warning.style.fontWeight = "700";
  questionForm.appendChild(warning);
}

function clearValidationMessage() {
  const existing = document.getElementById("question-validation-message");
  if (existing) {
    existing.remove();
  }
}

async function saveResultCapture() {
  if (typeof html2canvas !== "function") {
    alert("Não foi possível gerar a captura nesta tentativa.");
    return;
  }

  captureButton.disabled = true;
  captureButton.textContent = "Gerando captura...";
  screens.result.classList.add("capture-mode");

  try {
    await new Promise((resolve) => requestAnimationFrame(resolve));

    const canvas = await html2canvas(screens.result, {
      scale: Math.max(2, window.devicePixelRatio || 1),
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false
    });

    const link = document.createElement("a");
    const safeName = state.studentName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9-_ ]/g, "")
      .trim()
      .replace(/\s+/g, "_")
      .toLowerCase();

    link.download = `resultado_quiz_${safeName || "aluno"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    console.error(error);
    alert("Erro ao salvar a captura. Tente novamente.");
  } finally {
    screens.result.classList.remove("capture-mode");
    captureButton.disabled = false;
    captureButton.textContent = "Salvar captura do resultado";
  }
}
