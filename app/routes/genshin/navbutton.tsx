export default function NavButton(props){
    return <a href={props.link} className="font-mono text-center text-genshin-nav-text ml-5 -translate-x-16">
        {props.text}
    </a>
}