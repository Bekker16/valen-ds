document.addEventListener("DOMContentLoaded", function () {
    const btnYes = document.querySelector(".yes-button");
    const btnNo = document.querySelector(".no-button");

    const prompts = [
        "Ты уверена?",
        "Прям точно??",
        "Может ты не в настроении?",
        "Ну пожалуйста",
        "Я думаю тебе стоит подумать",
        "Если ты скажешь нет, мне будет грустно((",
        "Я буду очень сильно грустить",
        "Очень очень грустить",
        "Хорошо, это твоё решение",
        "Спрошу ещё раз... ❤️"
    ];

    let promptIndex = 0;

    function handleNoClick() {
        btnNo.textContent = prompts[promptIndex];
        promptIndex = (promptIndex + 1) % prompts.length;

        // Увеличиваем кнопку "Да"
        const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
        btnYes.style.fontSize = `${currentSize * 1.2}px`;
    }

    function handleYesClick() {
        window.location.href = "yes_page.html";
    }

    // Привязываем обработчики событий
    btnNo.addEventListener("click", handleNoClick);
    btnYes.addEventListener("click", handleYesClick);
});
