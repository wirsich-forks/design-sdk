import { ReflectSceneNode, ReflectSceneNodeType } from ".";
import { rawTypeToReflectType } from "../../utils";
import { checkIfRoot } from "../../utils/check-if-root";
import { ReflectLayoutMixin, ReflectBlendMixin, ReflectChildrenMixin } from "./mixins";


export interface IReflectNodeReference {
    readonly type: ReflectSceneNodeType
    name: string;
    id: string;
    parentReference?: IReflectNodeReference
}

export class ReflectBaseNode implements IReflectNodeReference, ReflectLayoutMixin, ReflectBlendMixin {
    readonly type: ReflectSceneNodeType
    origin: ReflectSceneNodeType
    originRaw: string

    constructor(props: {
        id: string,
        name: string,
        parent?: (ReflectSceneNode & ReflectChildrenMixin) | null
        origin: string
    }) {
        this.id = props.id
        this.name = props.name
        this.parent = props.parent
        this.origin = rawTypeToReflectType(props.origin)
        this.originRaw = props.origin
    }

    locked: boolean
    id: string;
    absoluteTransform: Transform
    parent: (ReflectSceneNode & ReflectChildrenMixin) | null;
    name: string;
    readonly pluginData: { [key: string]: string };

    // layout related
    x: number;
    y: number;
    get absoluteX(): number {
        // x point on affine space
        return this.absoluteTransform[0][2]
    }

    get absoluteY(): number {
        // y point on affine space
        return this.absoluteTransform[1][2]
    }


    rotation: number; // In degrees
    width: number;
    height: number;
    layoutAlign: "MIN" | "CENTER" | "MAX" | "STRETCH";
    //

    // blen related
    opacity: number;
    blendMode: "PASS_THROUGH" | BlendMode;
    isMask: boolean;
    effects: ReadonlyArray<Effect>;
    effectStyleId: string;
    visible: boolean;
    radius: number;
    //

    get isComponent(): boolean {
        return [ReflectSceneNodeType.component, ReflectSceneNodeType.instance, ReflectSceneNodeType.variant].includes(this.type)
    }

    get isInstance(): boolean {
        return this.type === "INSTANCE"
    }

    get isMasterComponent(): boolean {
        return this.type == "COMPONENT";
    }

    get isRoot(): boolean {
        // DANGEROUS
        return checkIfRoot(this as any)
    }

    toString(): string {
        return `"${this.name}"`
    }

    copyAsSnippet(): IReflectNodeReference {
        return <IReflectNodeReference>{
            id: this.id,
            name: this.name,
            type: this.type,
            parentReference: {
                id: this.parent.id,
                name: this.parent.name,
                type: this.parent.type,
            }
        }
    }
}