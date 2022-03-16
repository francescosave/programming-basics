# Exercise m1/037-center-a-string by Francesco Ricci

def centerOfScreen(string,width_screen):
    """
    This funcion return the string with leading spaces to center it on the screen
    """
    return  string if len(string) >= width_screen else ' '*-((len(string)-width_screen)//2) + string


def main():

    print(f'\n{centerOfScreen("CITTA",50)}')
    print(f'{centerOfScreen("-------------", 50)}')
    print(f'{centerOfScreen("adelfia", 50)}')
    print(f'{centerOfScreen("acquaviva", 50)}')
    print(f'{centerOfScreen("casamassima", 50)}')
    print(f'{centerOfScreen("bitetto", 50)}')
    print(f'{centerOfScreen("bitritto", 50)}')
    print(f'{centerOfScreen("bitonto", 50)}')


if __name__ == "__main__":
    main()