function porownaj(liczba1, liczba2) {

	if (liczba1 === 20 || liczba2 === 20) {
		return true;
	} else if (liczba1 + liczba2 <= 20) {
		return true;
	}
	return false;
}