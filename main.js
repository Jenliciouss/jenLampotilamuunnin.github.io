function celsiusFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinCelsius(kelvin) {
    return kelvin - 273.15;
}


document.getElementById("muunna").addEventListener("click", function() {

    let lampotila = document.getElementById("lampotila").value;
    let muunnos = document.getElementById("muunnos").value;
    let vastaus = document.getElementById("vastaus");

    // annetaan lämpötila
    if (lampotila === "") {
        vastaus.textContent = "Virhe: Syötä lämpötila.";
        return;
    }

    // muunnetaan numeroksi
    let numero = Number(lampotila);

    // tarkistus
    if (isNaN(numero)) {
        vastaus.textContent = "Virhe: Syötä lämpötila lukuarvona.";
        return;
    }

    // absoluuttinen nollapiste
    if (muunnos === "celsius-fahrenheit" && numero < -273.15) {
        vastaus.textContent =
            "Virhe: Lämpötila ei voi olla alle -273,15 °C.";
        return;
    }

    if (muunnos === "celsius-kelvin" && numero < -273.15) {
        vastaus.textContent =
            "Virhe: Lämpötila ei voi olla alle -273,15 °C.";
        return;
    }

    if (muunnos === "kelvin-celsius" && numero < 0) {
        vastaus.textContent =
            "Virhe: Kelvin-lämpötila ei voi olla alle 0 K.";
        return;
    }

    // desimaalit
    let desimaalit = document.querySelector(
        'input[name="desimaalit"]:checked'
    ).value;

    let tulos;

    // muunnos
    if (muunnos === "celsius-fahrenheit") {
        tulos = celsiusFahrenheit(numero);
        vastaus.textContent =
            tulos.toFixed(desimaalit) + " °F";
    }

    if (muunnos === "fahrenheit-celsius") {
        tulos = fahrenheitCelsius(numero);

        if (tulos < -273.15) {
            vastaus.textContent =
                "Virhe: Lämpötila on alle absoluuttisen nollapisteen.";
            return;
        }

        vastaus.textContent =
            tulos.toFixed(desimaalit) + " °C";
    }

    if (muunnos === "celsius-kelvin") {
        tulos = celsiusKelvin(numero);
        vastaus.textContent =
            tulos.toFixed(desimaalit) + " K";
    }

    if (muunnos === "kelvin-celsius") {
        tulos = kelvinCelsius(numero);
        vastaus.textContent =
            tulos.toFixed(desimaalit) + " °C";
    }

});