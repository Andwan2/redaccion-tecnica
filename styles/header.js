import css from "styled-jsx/css";

const style = css`
    .sidenav {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 75%;
        background-color: #fff;
        transition: all ease 0.35s;
        transform: translateX(-3000px);
        z-index: 10;
    }

    .sidenav.active {
        transform: translateX(0);
    }

    .profile {
        position: relative;
        height: auto;
        overflow: hidden;
        padding: 32px 32px 12px 32px;
        margin-bottom: 5px;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .user-info .avatar {
        margin-bottom: 22px;
    }

    .user-info img {
        width: 30%;
        border-radius: 100%;
    }

    .user-info p {
        color: #fff;
        font-size: 12px;
    }

    .menu {
        padding-left: 0;
    }

    .list-menu {
        list-style: none;
    }

    .list-menu a {
        display: flex;
        align-items: center;
        padding: 12px;
        color: #000;
        text-decoration: none;
        transition: background ease 0.3s;
    }

    .list-menu a:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .list-menu i {
        margin-right: 14px;
    }

    .overlay {
        position: fixed;
        display: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 5;
    }

    .overlay.active {
        display: block;
    }

    .header-visible {
        box-shadow: var(--shadow);
        padding: 12px;
    }

    .btn-menu {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    @media screen and (min-width: 996px) {
        .sidenav {
            position: static;
            transform: translate(0);
            width: 100%;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .container-sidenav {
            display: flex;
            flex-direction: row-reverse;
            width: 90%;
            margin: 0 auto;
        }

        .profile {
            padding: 0;
            width: min-content;
            width: fit-content;
        }

        .background {
            display: none;
        }

        .header-visible {
            display: none;
        }

        .user-info .avatar {
            margin-bottom: 0;
        }

        .user-info p {
            color: #000;
            font-size: 12px;
        }

        .list-menu a {
            border-radius: 14px;
        }

        .menu {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 0 16px;
        }
    }
`;

export default style;
