$(document).ready(function () {

    var myNum;
    var myDigits;
    var numOfGuesses = 0;

    $("#start-btn").on("click", (e) => {
        // e.preventDefault();
        // myNum = $('#my-num').val()
        // if (myNum.length !== 4) $(".begin-error").toggle();
        // else {
        //     myDigits = Array.from(myNum);
        //     var result = new Set(myDigits);
        //     if (result.size !== 4) $(".begin-error2").toggle();
        //     else {
        //         $(".game-start").addClass("hidden");
        //         $(".game").removeClass("hidden");
        //     }
        // }


        // Single Player Mode
        e.preventDefault();
        myNum = Math.floor(1000 + Math.random() * 9000 + 1);

        myDigits = Array.from(myNum.toString());
        $(".game-start").addClass("hidden");
        $(".game").removeClass("hidden");

        console.log(myDigits);

    })

    $("#guess-btn").on('click', (e) => {
        e.preventDefault();
        var myGuess = $("#my-guess").val();

        if (myGuess.length !== 4) {
            $("#my-guess").val("");
            return;
        } else {
            numOfGuesses++;

            if (numOfGuesses === 10) {
                $(".game").addClass("hidden");
                $(".result").removeClass("hidden");
                $(".lose").removeClass("hidden");
                $(".lose").append(`<span> Number was ${myNum}.</span>`)
            }

            $("#num-of-guesses").html(`<h3>${10 - numOfGuesses} guess left!</h3>`)

            var correct = 0;
            var position = 0;

            Array.from(myGuess).forEach((digit) => {
                if (myDigits.includes(digit)) {
                    correct++;
                    if (myDigits.indexOf(digit) === myGuess.indexOf(digit)) position++;
                }
            })




            $("tbody").append(`
            <tr>
                    <td>${myGuess}</td>
                    <td>${correct}</td>
                    <td>${position}</td>
                </tr>
            `);



            if (myGuess === myNum.toString()) {
                $(".game").addClass("hidden");
                $(".result").removeClass("hidden");
                $(".win").removeClass("hidden");

                $(".win").append(`<span> In ${numOfGuesses} guesses.</span>`)
            }

            $("#my-guess").val("");

        }


    })



    $("#play-again-btn").on("click", (e) => {
        window.location.reload()
    })

});