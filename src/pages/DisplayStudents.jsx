import React, {useContext} from "react"

export default function DisplayStudents(){
    const tData = {
        batch1 : "September",
        batch2 : "October",
        batch3 : "November",
        course1 : "MERN",
        course2 : "MEVN"
    }
    return(
        <div>
            <table border={0}>
                <thead>
                    <tr>
                        <th className="td-thead">Name</th>
                        <th className="td-thead">Age</th>
                        <th className="td-thead">Course</th>
                        <th className="td-thead">Batch</th>
                        <th className="td-thead">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr-tbody">
                        <td className="td-tbody5" title="Student Name">Boy1</td>
                        <td className="td-tbody5" title="Student Age">20</td>
                        <td className="td-tbody5" title="Student Course">{tData.course1}</td>
                        <td className="td-tbody5" title="Student Batch">{tData.batch2}</td>
                        <td className="td-tbody5"></td>
                    </tr>
                    <tr className="tr-tbody">
                        <td className="td-tbody5" title="Student Name">Girl1</td>
                        <td className="td-tbody5" title="Student Age">21</td>
                        <td className="td-tbody5" title="Student Course">{tData.course1}</td>
                        <td className="td-tbody5" title="Student Batch">{tData.batch2}</td>
                        <td className="td-tbody5"></td>
                    </tr>
                    <tr className="tr-tbody">
                        <td className="td-tbody5" title="Student Name">Girl2</td>
                        <td className="td-tbody5" title="Student Age">20</td>
                        <td className="td-tbody5" title="Student Course">{tData.course2}</td>
                        <td className="td-tbody5" title="Student Batch">{tData.batch1}</td>
                        <td className="td-tbody5"></td>
                    </tr>
                    <tr className="tr-tbody">
                        <td className="td-tbody5" title="Student Name">Boy2</td>
                        <td className="td-tbody5" title="Student Age">23</td>
                        <td className="td-tbody5" title="Student Course">{tData.course2}</td>
                        <td className="td-tbody5" title="Student Batch">{tData.batch3}</td>
                        <td className="td-tbody5"></td>
                    </tr>
                    <tr className="tr-tbody">
                        <td className="td-tbody5" title="Student Name">Girl3</td>
                        <td className="td-tbody5" title="Student Age">19</td>
                        <td className="td-tbody5" title="Student Course">{tData.course2}</td>
                        <td className="td-tbody5" title="Student Batch">{tData.course3}</td>
                        <td className="td-tbody5"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};