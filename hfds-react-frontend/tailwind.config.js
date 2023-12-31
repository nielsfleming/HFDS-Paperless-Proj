/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'neutral-10': '#F5F5F6',
                'neutral-20': '#EBECED',
                'neutral-25': '#E4E4E4',
                'neutral-30': '#B1B3B8',
                'neutral-40': '#6C717A',
                'neutral-50': '#3B414E',
                'neutral-60': '#2F343E',
                'neutral-70': '#23272F',

                'success-green-10': '#F2F8F7',
                'success-green-20': '#E5F1EF',
                'success-green-30': '#99CAC1',
                'success-green-40': '#409B8B',
                'success-green-50': '#007A64',
                'success-green-60': '#006250',
                'success-green-70': '#00493C',

                'info-blue-10': '#F4F7FC',
                'info-blue-20': '#E9EFFA',
                'info-blue-30': '#A7C2EB',
                'info-blue-40': '#5B8CD9',
                'info-blue-50': '#2466CC',
                'info-blue-60': '#1D52A3',
                'info-blue-70': '#163D7A',

                'error-red-10': '#FBF3F3',
                'error-red-20': '#F6E7E7',
                'error-red-30': '#DD9F9F',
                'error-red-40': '#BF4B4B',
                'error-red-50': '#AA0F0F',
                'error-red-60': '#880C0C',
                'error-red-70': '#660909',

                'warning-yellow-10': '#FBF7F3',
                'warning-yellow-20': '#F6EEE7',
                'warning-yellow-30': '#DDBEA0',
                'warning-yellow-40': '#BF864D',
                'warning-yellow-50': '#A95D11',
                'warning-yellow-60': '#874A0E',
                'warning-yellow-70': '#65380A',

                'primary-purple-10': '#F7F7FF',
                'primary-purple-20': '#EFEEFE',
                'primary-purple-30': '#BFBEFD',
                'primary-purple-40': '#8886FB',
                'primary-purple-50': '#605DF9',
                'primary-purple-60': '#4d4ac7',
                'primary-purple-70': '#3A3895'
            },
            boxShadow: {
                focus: '0 0 2px 4px #889CE4',
                'full-lg': '0 1px 10px #47548440',
                'full-sm': '0px 1px 5px #47548440',
                card: '0px 4px 4px rgba(0, 0, 0, 0.15)'
            }
        }
    },
    plugins: []
};
