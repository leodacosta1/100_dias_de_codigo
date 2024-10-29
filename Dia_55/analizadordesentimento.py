#pip install textblob
#python -m textblob.download_corpora
    # [certificar de que o textblob foi instalado. Ctrl + Shift + P > Python: Select Interpreter]
#pip install deep_translator

from textblob import TextBlob
from deep_translator import GoogleTranslator

def translate_to_english (text):
    translator = GoogleTranslator(source="pt", target="en")
    translation = translator.translate(text)
    return translation

def analyze_sentiment(text):
    text_in_english = translate_to_english(text)
    blob = TextBlob(text_in_english)
    sentiment = blob.sentiment
    return sentiment

texto = "Não faz isso com o teu camarada. Eu tenho várias receitas boas. Sabe? Como por exemplo filé de carcaça de peixe com papa de maionese, marshmallow e semente de maracujá. O capitão precisa experimentar o meu estrogonofe. Estrogonofe de baleia."
sentimento = analyze_sentiment(texto)
print(f"Texto: {texto}\nSentimento: {sentimento}")