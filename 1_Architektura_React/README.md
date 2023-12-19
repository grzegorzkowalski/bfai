# React architektura frameworka 
1. Zainstaluj w folderze `HTTPS` nową aplikację React za pomocą komendy `npm create vite@latest secure-comunication -- --template react`.
2. Przejdź do projektu.
3. Zainstaluj paczki.
4. Uruchom.

## Strict Mode

### Ćwiczenie 1: Identifikacja Przestarzałych Metod Cyklu Życia

#### Zadanie:

Stwórz komponenty klasowe z użyciem metod cyklu życia, które są oznaczone jako niebezpieczne (np. `componentWillMount`, `componentWillReceiveProps`, `componentWillUpdate`).
Opakuj te komponenty w `StrictMode`.
Uruchom aplikację i sprawdź konsolę deweloperską w przeglądarce, aby zobaczyć ostrzeżenia.

### Ćwiczenie 2: Wykrywanie Efektów Ubocznych w Renderowaniu

#### Zadanie:

Utwórz komponent, który wykonuje pewne działania z efektami ubocznymi (np. manipulowanie DOM) bezpośrednio w metodzie renderowania.
Owiń komponent w `StrictMode`.
Obserwuj zachowanie komponentu i sprawdź konsolę deweloperską w przeglądarce pod kątem ostrzeżeń.
Oczekiwany Wynik: React może wywołać metodę renderowania dwa razy w trybie deweloperskim podczas używania StrictMode, co może ujawnić nieoczekiwane efekty uboczne.

### Ćwiczenie 3: Testowanie na Użycie Niezalecanych Metod
#### Zadanie:

Zastosuj w komponentach metody, które mogą być uznane za niebezpieczne lub przestarzałe w przyszłych wersjach React (np. `findDOMNode`).
Owiń te komponenty w `StrictMode`.
Uruchom aplikację i sprawdź, czy pojawiają się ostrzeżenia w konsoli deweloperskiej.
Oczekiwany Wynik: React powinien wyświetlać ostrzeżenia dotyczące użycia niezalecanych metod.


## JSX - testowanie bezpieczeństwa

### Ćwiczenie 4: Bezpieczne renderowanie danych użytkownika

#### Zadanie:

Stwórz komponent, który przyjmuje dane wejściowe od użytkownika (np. przez pole tekstowe formularza).
Wprowadź do tego pola tekstowego potencjalnie złośliwy kod JavaScript, taki jak `<script>alert('XSS');</script>`.
Wyświetl wprowadzone dane na stronie i zobacz, czy skrypt JavaScript zostanie wykonany.

### Ćwiczenie 5: Używanie dangerouslySetInnerHTML

#### Zadanie:

Stwórz komponent, który używa `dangerouslySetInnerHTML` do renderowania surowego HTML dostarczonego przez użytkownika.
Przetestuj komponent, wprowadzając zarówno zwykły tekst HTML, jak i złośliwy kod JavaScript.
Spróbuj zaimplementować prosty mechanizm dezynfekcji i sprawdź, czy zapobiega on wykonaniu złośliwego kodu.

### Ćwiczenie 6: Wstrzykiwanie skryptów w atrybutach

#### Zadanie:

Stwórz komponent, który pozwala użytkownikowi na ustawienie atrybutów elementu, np. href w linku `<a>` lub src w obrazku `<img>`.
Przetestuj wprowadzanie złośliwego kodu JavaScript jako wartości atrybutów, np. `javascript:alert('XSS')`.
Sprawdź, czy React pozwala na wykonanie takiego skryptu.

## Props - testowanie bezpieczeństwa

### Ćwiczenie 7: Testowanie sanityzacji danych wejściowych

1. Stwórz komponent, który przyjmuje dane użytkownika jako props i wyświetla je w interfejsie użytkownika.
1. Przetestuj komponent, przekazując różne rodzaje danych, w tym potencjalnie złośliwe skrypty JavaScript w formie ciągu znaków.

### Ćwiczenie 8: Walidacja typów za pomocą PropTypes

1. Zainstalu bibliotekę `npm install --save prop-types`.
1. Dodaj PropTypes do istniejącego komponentu, określając oczekiwane typy dla wszystkich props.
1. Przetestuj zachowanie w przypadku podania błędnego typu props. 