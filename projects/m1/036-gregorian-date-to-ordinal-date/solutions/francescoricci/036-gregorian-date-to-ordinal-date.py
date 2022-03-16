# Exercise 036-gregorian-date-to-ordinal-date by Francesco Ricci

def getFebruaryLastDay(year):
    """
    This funcion return last day of february mounth of the year passed in function argument
    """
    return 29 if (year % 400 == 0) or (year % 4 == 0 and (not(year % 100 == 0))) else 28

def getLastDayMounth(day,mounth,year):
    """
    This funcion return last day of mounth of the year passed in function argument
    """

    mounth_30 = 30
    mounth_31 = 31

    if mounth == 1 or mounth == 3 or mounth == 5 or mounth == 7 or mounth == 8 or mounth == 10 or mounth == 12:
        result = mounth_31
    elif mounth == 2:
        result = getFebruaryLastDay(year)
    elif mounth == 4 or mounth == 6 or mounth == 9 or mounth == 11 :
        result = mounth_30
    else:
        return(0)

    return result


def getOrdinaldate(day,mounth,year):
    """
    This funcion return day's count beetween 1 january and parameter date in function arguments
    """

    count_day = 0

    if mounth == 1:
        count_day = day
        return day

    for mount_current in range(1,mounth):
        count_day = count_day + getLastDayMounth(day,mount_current,year)
        #print(f'{mount_current}  {isLastDayMounth(day,mount_current,year)} {count_day}')

    count_day = count_day + day

    return count_day


def main():

    print(getOrdinaldate(31, 1, 2022))
    print(getOrdinaldate(28, 2, 2022))
    print(getOrdinaldate(31, 3, 2022))
    print(getOrdinaldate(30, 4, 2022))
    print(getOrdinaldate(30, 5, 2022))
    print(getOrdinaldate(31,12,2022))

    # #test
    # print('\ntest')
    # print('2020 is leap')
    # print(getOrdinaldate(31, 1, 2020) == 31)
    # print(getOrdinaldate(29, 2, 2020) == 60)
    # print(getOrdinaldate(10, 3, 2020) == 70)
    # print(getOrdinaldate(1, 4, 2020) == 121)
    # print(getOrdinaldate(1, 5, 2020) == 152)
    # print(getOrdinaldate(1, 6, 2020) == 182)
    # print(getOrdinaldate(1, 7, 2020) == 213)
    # print(getOrdinaldate(1, 8, 2020) == 244)
    # print(getOrdinaldate(1, 9, 2020) == 274)
    # print(getOrdinaldate(1, 10, 2020) == 305)
    # print(getOrdinaldate(1, 11, 2020) == 335)
    # print(getOrdinaldate(1, 12, 2020) == 366)
    # print('2021 not is leap')
    # print(getOrdinaldate(31, 1, 2021) == 31)
    # print(getOrdinaldate(28, 2, 2021) == 59)
    # print(getOrdinaldate(10, 3, 2021) == 69)
    # print(getOrdinaldate(1, 4, 2021) == 120)
    # print(getOrdinaldate(1, 5, 2021) == 151)
    # print(getOrdinaldate(1, 6, 2021) == 181)
    # print(getOrdinaldate(1, 7, 2021) == 212)
    # print(getOrdinaldate(1, 8, 2021) == 243)
    # print(getOrdinaldate(1, 9, 2021) == 273)
    # print(getOrdinaldate(1, 10, 2021) == 304)
    # print(getOrdinaldate(1, 11, 2021) == 334)
    # print(getOrdinaldate(1, 12, 2021) == 365)

if __name__ == "__main__":
    main()