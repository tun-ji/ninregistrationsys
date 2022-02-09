import { Column, Entity, JoinColumn, Like, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Citizen } from "src/nin-registration/citizens/entities/citizen.entity"


@Entity()
export class LinkedIdentity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nin: string

    @Column()
    bvn: string

    @Column()
    mobile_number: string

    @JoinColumn()
    @OneToOne(type => Citizen, citizen => citizen.linkedIdentity , {cascade:true})
    citizen: Citizen 
}
