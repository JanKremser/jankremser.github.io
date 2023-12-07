import { defineComponent } from 'vue';

let template = /* html */`
<nav>
    <ul>
        <li>
            <a href="/"
                v-if="enableBackBtn"
            >
                <strong>
                    $ cd /
                </strong>
            </a>
        </li>
    </ul>
    <ul>
        <li
            v-for="(item, index) in navLinks"
        ><a :href="item.href">{{ item.name }}</a></li>
        <!-- <li><a href="#" role="button">Button</a></li> -->
    </ul>
</nav>
`

export default defineComponent({
    props: {
        enableBackBtn: {
            type: Boolean,
            default: true,
        }
    },
    data: () => ({
        navLinks: [
            {
                name: "Projects",
                href: "/projects.html",
            }
        ],
    }),
    template,
});
