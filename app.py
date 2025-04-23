import streamlit as st
import pandas as pd

st.set_page_config(page_title="Ethical AI Career Counseling", layout="wide")
st.title("🎓 Ethical AI-Powered Career Counseling System")

role = st.selectbox("Who are you?", ["Student", "Teacher/Advisor"])

if role == "Student":
    st.header("📘 Student Portal")
    name = st.text_input("Enter your name")
    interests = st.multiselect("Select your interests", ["Science", "Art", "Math", "Coding", "Music", "Sports"])
    skills = st.slider("Self-assessed skill level (1 - 10)", 1, 10, 5)
    goals = st.text_area("What are your career goals?")
    
    if st.button("Get Career Guidance"):
        st.success("🤖 Recommended Fields:")
        if "Coding" in interests or skills > 7:
            st.write("- Software Engineering")
            st.write("- Data Science")
        if "Art" in interests:
            st.write("- Graphic Design")
            st.write("- Animation & Media")
        if "Science" in interests:
            st.write("- Research & Development")
            st.write("- Healthcare")

elif role == "Teacher/Advisor":
    st.header("👩‍🏫 Teacher/Advisor Portal")
    uploaded_file = st.file_uploader("Upload student performance CSV", type=["csv"])
    if uploaded_file:
        df = pd.read_csv(uploaded_file)
        st.dataframe(df)
        st.success("Data uploaded successfully. AI-based insights coming soon!")

st.markdown("---")
st.markdown("🔒 This app ensures privacy, fairness, and transparency. No data is stored.")
