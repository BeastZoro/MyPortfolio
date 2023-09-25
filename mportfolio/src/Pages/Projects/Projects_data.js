import cart_app from '../../assets/Images/cart_app.png'
import colorblends from '../../assets/Images/colorblends.png'
import teams_image from '../../assets/Images/teams_page.png'
import realstate from '../../assets/Images/pythonrealstate.png'
import react_ecoomerce from '../../assets/Images/react_ecommerce.png'

const  Project_data = [
    {
        name: 'colour Blends',
        link : 'https://r-colors-pallete.netlify.app/',
        code : '',
        desc : 'This web app lets you effortlessly experiment with various shades. Choose your favorite color by inputting its code or name, or simply let your creativity flow with the "Random" button.',
        image :colorblends,
        technologies : ['react', 'tailwindcss', 'css']
    },
    {
        name: 'Cart Manager',
        link : 'https://r-cartapp.netlify.app/',
        code : 'https://github.com/BeastZoro/ReactPro/tree/main/cartapp',
        desc : 'This React app is designed to enhance your shopping experience. It fetches products via an API and organizes them into dynamic categories, streamlining your choices. With category-based filters, finding your desired products is a breeze. You can easily add products to your cart, adjust quantities, and watch the total update in real-time on the cart page. The magic lies in the useContext hook, effectively managing app states. Plus, the app proudly showcases the total product count in your cart for quick reference.',
        image :cart_app,
        technologies : ['react', 'css']
    },
    {
        name: 'Teams Manager',
        link : 'https://sciastra-team.netlify.app/',
        code : 'https://github.com/BeastZoro/ReactPro/tree/main/teampage',
        desc : 'This React app is designed to enhance your shopping experience. It fetches products via an API and organizes them into dynamic categories, streamlining your choices. With category-based filters, finding your desired products is a breeze. You can easily add products to your cart, adjust quantities, and watch the total update in real-time on the cart page. The magic lies in the useContext hook, effectively managing app states. Plus, the app proudly showcases the total product count in your cart for quick reference.',
        image :teams_image,
        technologies : ['react', 'css', 'tailwindcss']
    },
    {
        name: 'real estate',
        link : '',
        code : 'https://github.com/BeastZoro/Python_Projects/tree/main/realstate',
        desc : 'This React app is designed to enhance your shopping experience. It fetches products via an API and organizes them into dynamic categories, streamlining your choices. With category-based filters, finding your desired products is a breeze. You can easily add products to your cart, adjust quantities, and watch the total update in real-time on the cart page. The magic lies in the useContext hook, effectively managing app states. Plus, the app proudly showcases the total product count in your cart for quick reference.',
        image :realstate,
        technologies : ['python', 'django', 'bootstarp', 'css']
    },
    {
        name: 'React E-commerce',
        link : '',
        code : 'https://github.com/BeastZoro/FullStackApp.git',
        desc : 'This React app is designed to enhance your shopping experience. It fetches products via an API and organizes them into dynamic categories, streamlining your choices. With category-based filters, finding your desired products is a breeze. You can easily add products to your cart, adjust quantities, and watch the total update in real-time on the cart page. The magic lies in the useContext hook, effectively managing app states. Plus, the app proudly showcases the total product count in your cart for quick reference.',
        image :react_ecoomerce,
        technologies : ['python', 'django', 'bootstarp', 'css', 'tailwindcss']
    },
    
]

export default Project_data