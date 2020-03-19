import React, { Component } from "react";
import ReleaseTimer from "./ReleaseTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import WYSIWYG from "../../../../Utility/WYSIWYG/WYSIWYG";
import DropdownSelection from "./Dropdown/Dropdown";
import PhysicalURLs from "../PhysicalURLs/PhysicalURLs";
import ArtworkMedia from "../ArtworkMedia/ArtworkMedia";
import PreSaveURIs from "../PreSaveURIs/PreSaveURIs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ReleaseDetails.module.scss";
import "./datecss.css";

// import SimpleReactValidator from 'simple-react-validator';

export default class ReleaseDetails extends Component {
    render() {
        let handleColor = time => {
            return "text-success";
        };       
        return (
            <>
                <article className={styles.initialDescription}>
                    <h3>Type</h3>
                    <div className={styles.Dropdown}>
                        <DropdownSelection handleInput={this.props.handleInput} />
                    </div>
                    <form className="myForm">
                        <h3>Title *</h3>
                        <input type="text" name="title" required value={this.props.formData.title} onChange={this.props.handleInput} />
                        <h3>Description *</h3>
                        <textarea rows="8" name="description" required value={this.props.formData.description} onChange={this.props.handleInput} />
                    </form>
                </article>
                
                {/* <ReleaseTimer /> */}
               
                <h3>Announcement Date</h3>
                <div className={styles.datepickerclass}>
                    <DatePicker
                        // onSelect={this.handleSelect}
                        selected={this.props.formData.startDate}
                        onChange={this.props.handleChange}
                        timeClassName={handleColor}
                        showTimeSelect
                        timeInputLabel="Time:"
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        popperClassName="fuckingwork"
                    />
                </div>
                <div>
                    <WYSIWYG />
                </div>
                {/* <WYSIWYG /> */}
                <h3>Release</h3>
                <DatePicker
                        // onSelect={this.handleSelect}
                        selected={this.props.formData.startDateReleases}
                        onChange={this.props.handleChangeReleases}
                        timeClassName={handleColor}
                        showTimeSelect
                        timeInputLabel="Time:"
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                />
                <ReleaseTimer />
                <hr />
                <PhysicalURLs formData={this.props.formData.physicalURLs} handleInput={this.props.handleInputPhysicalURLs} />
                <PreSaveURIs formData={this.props.formData.preSaveURIs} handleInput={this.props.handleInputPresaveURIs} />
                <ArtworkMedia handleInput={this.props.handleInput} />
            </>
        );
    }
}