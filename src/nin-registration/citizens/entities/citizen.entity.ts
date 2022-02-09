import { LinkedIdentity } from "src/nin-registration/linked-identities/entities/linked-identity.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Citizen {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    middleName: string

    @Column()
    lastName: string

    @Column()
    dateOfBirth: Date

    @Column()
    nationality: string

    @Column()
    countryOfBirth: string

    @Column()
    stateOfBirth: string

    @Column()
    townOfBirth: string

    @Column()
    residenceAddress: string

    @Column({nullable: true})
    profession: string

    @JoinColumn()
    @OneToOne(type => LinkedIdentity, LinkedIdentity => LinkedIdentity.citizen)
    linkedIdentity: LinkedIdentity
}
