import { CreateLinkedIdentityDto } from "src/nin-registration/linked-identities/dto/create-linked-identity.dto"

export class CreateCitizenDto {
    readonly firstName: string
    readonly middleName: string
    readonly lastName: string
    readonly dateOfBirth: Date
    readonly nationality: string
    readonly countryOfBirth: string
    readonly stateOfBirth: string
    readonly townOfBirth: string
    readonly residenceAddress: string
    readonly profession?: string
    readonly linkedIdentity: CreateLinkedIdentityDto
}
