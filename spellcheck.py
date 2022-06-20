from textblob import Word
import re
 
def correct_word_spelling(text):
    L=re.findall('[a-z]+', text.lower())
    ans=[]
    for i in L:
      x = Word(i)
      result = x.correct()
      ans+=[str(result)]
    return ans
