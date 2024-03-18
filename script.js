function selectCharacter(character) {
    const selectedCharacterImage = document.getElementById('selectedCharacterImage');
    selectedCharacterImage.innerHTML = `<img src="${character}.png" alt="${character}" class="selected-character-image">`;
}
