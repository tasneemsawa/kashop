export const Styles = {
    mainContainer: {
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"

    },
    subContainer: {
        borderRadius: "12px",
        border: "1px solid rgb(227, 233, 239)",
        width: "500px",
        margin: "2rem"
    },
    title: {
        fontSize: "20px",
        marginBottom: "8px",
        textAlign: "center",
        fontWeight: "700"
    },
    subTitle: {
        fontSize: "12px",
        marginBottom: "36px",
        textAlign: "center",
        fontWeight: "600"
    },
    regiesterButton: {
        backgroundColor: "#E94560",
        fontSize: "14px", fontWeight: "600", borderRadius: "8px",
        textTransform: "none"
    },
    terms: { fontSize: "14px", color: "#7D879C", alignItems: "flex-start", justifyContent: "flex-start" },
    termsSpan: {
        fontSize: "14px", fontWeight: "600", color: "#2B3445", textDecorationColor: "#2B3445", marginBottom: "-10px", textUnderlineOffset: "4px",
    },
    facebookButton: {
        backgroundColor: "#3B5998",
        fontSize: "14px", fontWeight: "600", borderRadius: "8px",
        textTransform: "none",
        margin: 0,
    },
    googleButton: {
        backgroundColor: "#4285F4",
        fontSize: "14px", fontWeight: "600", borderRadius: "8px",
        textTransform: "none",
        margin: 0,


    },
    divider: {
        color: "grey.600",
        "&::before, &::after": {
            borderTop: "0.1px solid",
            borderColor: "grey.300",
            width: "170px",

        },
    },
    loginLink: {
        color: "#2B3445", textDecorationColor: "#2B3445", textDecoration: "underline", textUnderlineOffset: "4px",fontWeight:"600"
    }

};
