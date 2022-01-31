# exercise m1/025 by francesco ricci

alphabet = 'abcdefghijklmnopqrstuvwxyz'

def encrypt(alphabet,shift):
    result = alphabet[0]
    for counter in range(0,len(alphabet)):
        left_message = result[0:counter] if counter > 0 else ''
        current_character = alphabet[counter]
        shift_current_character = chr(ord(current_character) + shift)
        right_message = alphabet[counter + 1:len(alphabet)]  if counter == len(alphabet) else ''
        result = "".join((left_message,shift_current_character,right_message))
    return result

def decryption(alphabet,shift):
    result = alphabet[0]
    for counter in range(0,len(alphabet)):
        left_message = result[0:counter] if counter > 0 else ''
        current_character = alphabet[counter]
        shift_current_character = chr(ord(current_character) - shift)
        right_message = alphabet[counter + 1:len(alphabet)]  if counter == len(alphabet) else ''
        result = "".join((left_message,shift_current_character,right_message))
    return result

shift = 1
print(encrypt(alphabet,shift))
print((decryption(encrypt(alphabet,shift),shift)))




