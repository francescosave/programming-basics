# exercise 034-integer-to-ordinal

def main():
    print(make_ordinal(1))
    print(make_ordinal(2))
    print(make_ordinal(3))
    print(make_ordinal(4))
    print(make_ordinal(5))
    print(make_ordinal(6))
    print(make_ordinal(7))
    print(make_ordinal(8))
    print(make_ordinal(9))
    print(make_ordinal(10))
    print(make_ordinal(11))
    print(make_ordinal(12))

    # exception
    print(make_ordinal(13))
    print(make_ordinal(0))


def make_ordinal(number):
    """
    This function builds the text of the relative ordinal number
    and return its string value
    """
    if number == 1:
        text_ordinal_num = 'first'
    elif number == 2:
        text_ordinal_num = 'second'
    elif number == 3:
        text_ordinal_num = 'third'
    elif number == 4:
        text_ordinal_num = 'fourth'
    elif number == 5:
        text_ordinal_num = 'fiveth'
    elif number == 6:
        text_ordinal_num = 'sixth'
    elif number == 7:
        text_ordinal_num = 'seventh'
    elif number == 8:
        text_ordinal_num = 'eighth'
    elif number == 9:
        text_ordinal_num = 'ninth'
    elif number == 10:
        text_ordinal_num = 'tenth'
    elif number == 11:
        text_ordinal_num = 'eleventh'
    elif number == 12:
        text_ordinal_num = 'twelfth'
    else:
        return ""

    return text_ordinal_num


if __name__ == "__main__":
    main()
