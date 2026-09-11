// =========================================================
// PodoClin — comportamentos das telas (protótipo de front-end)
// Sem backend real ainda: valida no cliente e simula respostas.
// Substituir os TODOs pelas chamadas reais à API na Sprint em que
// o back-end estiver pronto.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  initTogglePassword();
  initLoginForm();
  initCadastroForm();
  initAgendaViewToggle();
  initBloquearHorario();
  initBuscaHorarios();
});

// ---- Login (RF.2.1) ----
function initTogglePassword() {
  const btn = document.getElementById("toggle-senha");
  const input = document.getElementById("login-senha");
  if (!btn || !input) return;

  btn.addEventListener("click", () => {
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
    btn.setAttribute("aria-label", showing ? "Mostrar senha" : "Ocultar senha");
  });
}

function initLoginForm() {
  const form = document.getElementById("form-login");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.getElementById("login-feedback");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // TODO: substituir por POST /login (comparar hash de senha no back-end)
    feedback.textContent = "Entrando...";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 500);
  });
}

// ---- Cadastro (RF.2.1 + RNF.2.3) ----
function initCadastroForm() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  const radiosTipo = form.querySelectorAll('input[name="tipoUsuario"]');
  const campoCrm = document.getElementById("campo-crm");

  radiosTipo.forEach((radio) => {
    radio.addEventListener("change", () => {
      campoCrm.style.display = radio.value === "podologo" && radio.checked ? "block" : "none";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.getElementById("cadastro-feedback");

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // TODO: substituir por POST /cadastro
    // A senha NUNCA deve ser enviada/armazenada em texto puro:
    // o back-end deve aplicar hash (ex.: bcrypt) antes de persistir (RNF.2.3).
    feedback.textContent = "Conta criada com sucesso! Redirecionando...";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 700);
  });
}

// ---- Agenda (RF.1.3) ----
function initAgendaViewToggle() {
  const toggle = document.getElementById("agenda-view-toggle");
  if (!toggle) return;

  const views = {
    dia: document.getElementById("agenda-view-dia"),
    semana: document.getElementById("agenda-view-semana"),
    mes: document.getElementById("agenda-view-mes"),
  };

  toggle.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggle.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selected = btn.dataset.view;
      Object.entries(views).forEach(([key, el]) => {
        if (!el) return;
        el.classList.toggle("d-none", key !== selected);
      });
    });
  });
}

function initBloquearHorario() {
  const btn = document.getElementById("btn-bloquear");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // TODO: abrir modal de seleção de intervalo e enviar POST /agenda/bloquear
    alert("Abrir seleção de horário a bloquear (modal a implementar).");
  });
}

// ---- Busca de horários (RF.1.1 início) ----
function initBuscaHorarios() {
  const grade = document.getElementById("grade-horarios");
  if (!grade) return;

  const servicoSelect = document.getElementById("servico");
  const resumoServico = document.getElementById("resumo-servico");
  const resumoDataHora = document.getElementById("resumo-data-hora");
  const dataInput = document.getElementById("data-consulta");
  const btnConfirmar = document.getElementById("btn-confirmar");
  const feedback = document.getElementById("reserva-feedback");

  function atualizarResumo() {
    const chipSelecionado = grade.querySelector(".pc-slot-chip.is-selected");
    const hora = chipSelecionado ? chipSelecionado.dataset.hora : "—";
    const data = dataInput && dataInput.value ? dataInput.value : "—";
    resumoServico.textContent = servicoSelect.value;
    resumoDataHora.textContent = `${data} / ${hora}`;
  }

  grade.querySelectorAll(".pc-slot-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      grade.querySelectorAll(".pc-slot-chip").forEach((c) => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      atualizarResumo();
    });
  });

  servicoSelect.addEventListener("change", atualizarResumo);
  dataInput.addEventListener("change", atualizarResumo);

  btnConfirmar.addEventListener("click", () => {
    const chipSelecionado = grade.querySelector(".pc-slot-chip.is-selected");
    if (!chipSelecionado) {
      feedback.textContent = "Selecione um horário antes de confirmar.";
      feedback.classList.add("text-danger");
      return;
    }

    // TODO: substituir por POST /agendar (ver diagrama de sequência CU.C.1)
    feedback.classList.remove("text-danger");
    feedback.textContent = "Consulta reservada com sucesso!";
  });
}
