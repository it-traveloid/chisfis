import { useRouter } from "next/router";

export const useCheckSession = () => {
    const router = useRouter();

    const authPathPages = [
        '/account/login',
        '/account/register'
    ];

    const checkAuthPage = () => {
        if (authPathPages.includes(router?.pathname)) return;

        router.push('/account/my-account');
    }

    const checkProfilePage = () => {
        if (router?.pathname.includes('/account')
            &&
            !authPathPages.includes(router?.pathname)) return;

        router.push('/account/login');
    }

    const check = (session) => {
        if (!router?.pathname.includes('/account')) return;

        if (session?.user) {
            checkProfilePage();
            return;
        }

        checkAuthPage();
    }

    return {
        checkAuthPage,
        checkProfilePage,
        check
    }
}