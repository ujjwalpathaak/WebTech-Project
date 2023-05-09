from textblob import TextBlob
import sys

text_1 = sys.argv[1]

p = TextBlob(text_1).sentiment.polarity

s = TextBlob(text_1).sentiment.subjectivity

rp = round(p, 3)
rs = round(s, 3)

print("Polarity of Text is", rp)
print("Subjectivity of Text is", rs)